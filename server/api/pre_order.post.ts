import * as UUID from "uuid";

export default defineEventHandler(async (event) => {
  const method  = getMethod(event)
  if (method !== "POST") {
    setResponseStatus(event, 400);
    return { success: false, data: { message: "Method not allowed", }};
  }

  const db = event.context.cloudflare?.env?.db || (globalThis as any).__miniflare__?.bindings?.db;
  if (!db) {
    setResponseStatus(event, 500);
    return { success: false, data: { message: "Internal Server Error qwe", }};
  }

  try {
    const body: any = await readBody(event)
    if (!body) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Body not found", }};
    }

    const { products, email } = body;
    if (!products) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Products not found" }};
    }
    if (!email) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Email not found" }};
    }

    await db.prepare(
      `INSERT INTO orders (id, email, products, created_at) VALUES (?, ?, ?, ?)`
    ).bind(
      UUID.v7(),
      email,
      JSON.stringify(products),
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
    console.error("Database Error:", error);
    setResponseStatus(event, 500);
    return { success: false, data: { message: "Internal Server Error" },
    }
  }
});