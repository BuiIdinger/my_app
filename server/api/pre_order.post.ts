import * as UUID from "uuid";
import { Message, ServerClient } from 'postmark';

export default defineEventHandler(async (event) => {
  const method  = getMethod(event)
  if (method !== "POST") {
    setResponseStatus(event, 405);
    return { success: false, data: { message: "Method not allowed", }};
  }

  const cloudflareEnv = event.context.cloudflare?.env || (globalThis as any).__miniflare__?.bindings;
  const db = cloudflareEnv?.db;
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

    const token = cloudflareEnv?.POSTMARK_SERVER_TOKEN;
    if (!token) {
      throw new Error("POSTMARK_SERVER_TOKEN is missing from environment variables");
    }

    const client = new ServerClient(token);

    const msg: Message = {
      To: email,          // Change to your recipient
      From: "noreply@fluffings.co.nz",  // Must be a verified sender/domain in Postmark
      Subject: "Sending with Postmark is Fun",
      TextBody: "and easy to do anywhere, even with TypeScript",
      HtmlBody: "<strong>and easy to do anywhere, even with TypeScript</strong>",
    };

    await client.sendEmail(msg);

    setResponseStatus(event, 200);
    return { success: true, data: { message: "Order placed" } };
  } catch (error: any) {
    console.error("Database Error:", error);
    setResponseStatus(event, 500);
    return { success: false, data: { error: error, message: "Internal Server Error aaa" }}
  }
});