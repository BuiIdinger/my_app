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

    await $fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: {
        personalizations: [
          {
            to: [{ email: email }]
          }
        ],
        from: {
          email: "noreply@fluffings.co.nz" // Make sure this matches your verified Sender in SendGrid
        },
        subject: "Sending with SendGrid API is Fun",
        content: [
          {
            type: 'text/plain',
            value: 'and easy to do anywhere, even with a raw HTTP fetch request'
          },
          {
            type: 'text/html',
            value: '<strong>and easy to do anywhere, even with a raw HTTP fetch request</strong>'
          }
        ]
      }
    });

    setResponseStatus(event, 200);
    return { success: true, data: { message: "Order placed" } };
  } catch (error: any) {
    console.error("Database Error:", error);
    setResponseStatus(event, 500);
    return { success: false, data: { error: error, message: "Internal Server Error aaa" }}
  }
});