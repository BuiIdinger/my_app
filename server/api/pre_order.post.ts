import * as UUID from "uuid";
import {Message, ServerClient} from 'postmark';
import * as Cart from "~/src/Cart";
import * as Notification from "~/src/Notification";
import {email_address, Page, set_page} from "~/src/models/CheckOut";

export default defineEventHandler(async (event) => {
  const method  = getMethod(event)
  if (method !== "POST") {
    setResponseStatus(event, 400);
    return { success: false, data: { message: "Method not allowed", }};
  }

  const db = event.context.cloudflare?.env?.db || (globalThis as any).__miniflare__?.bindings?.db;
  if (!db) {
    setResponseStatus(event, 500);
    return { success: false, data: { message: "Internal Server Error qwe" }};
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
    ).run();


    const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN || '');

    const msg: Message = {
      To: email_address.value,          // Change to your recipient
      From: "noreply@fluffings.co.nz",  // Must be a verified sender/domain in Postmark
      Subject: "Sending with Postmark is Fun",
      TextBody: "and easy to do anywhere, even with TypeScript",
      HtmlBody: "<strong>and easy to do anywhere, even with TypeScript</strong>",
    };

    client.sendEmail(msg).then(() => {
      setResponseStatus(event, 200);
      return { success: true, data: { message: "Order placed" } };
    })
    .catch((error: any) => {
      setResponseStatus(event, 500);
      return { success: false, data: { message: "Internal Server Error qweeee" }};
    });

    // const external_request = await $fetch(`https://api.external-service.com/users/${userId}/payout`, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${process.env.EXTERNAL_API_KEY}`
    //   }
    // });
  } catch (error: any) {
    console.error("Database Error:", error);
    setResponseStatus(event, 500);
    return { success: false, data: { error: error, message: "Internal Server Error aaa" }}
  }
});