import * as UUID from "uuid";

export default defineEventHandler(async (event) => {
  const method  = getMethod(event)
  if (method !== "POST") {
    setResponseStatus(event, 400);
    return { success: false, data: { message: "Method not allowed", }};
  }

  const db = event.context.cloudflare?.env?.DB
  if (!db) {
    setResponseStatus(event, 500);
    return { success: false, data: { message: "Internal Server Error", }};
  }

  try {
    const body: any = await readBody(event)
    if (!body) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Body not found", }};
    }

    const products = body.products;
    if (!products) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Products not found", }};
    }

    const email = body.email;
    if (!email) {
      setResponseStatus(event, 400);
      return {success: false, data: {message: "Email not found",}};
    }

    await db.prepare(
      `INSERT INTO orders (id, email, products, created_at) VALUES (?, ?, ?, ?)`
    ).bind(
      UUID.v7(),
      email,
      products,
      new Date().toISOString()
    ).run()

    // const external_request = await $fetch(`https://api.external-service.com/users/${userId}/payout`, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${process.env.EXTERNAL_API_KEY}`
    //   }
    // });

    setResponseStatus(event, 200);
    return { success: true, data: { message: "Order placed" },
    }
  } catch (error: any) {
    setResponseStatus(event, 500);
    return { success: false, data: { message: "Internal Server Error" },
    }
  }
});