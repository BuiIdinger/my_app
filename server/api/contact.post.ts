
export default defineEventHandler(async (event) => {
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

    const { message_content, email } = body as { message_content: string; email: string };
    if (!message_content) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Message content not found" } };
    }
    if (!email) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Email not found" }};
    }
    if (email.indexOf("@my.bdsc.school.nz") === -1) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Invalid email" }};
    }
    if (message_content === "") {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Invalid message content" }};
    }

    await db.prepare(
      `INSERT INTO contact_requests (id, email, message_content, created_at) VALUES (?, ?, ?, ?)`
    ).bind(
      UUID.v7(),
      email,
      message_content,
      new Date().toISOString()
    ).run();

    setResponseStatus(event, 200);
    return { success: true, data: { message: "Success" } };
  } catch (error: any) {
    console.error("Database Error:", error);
    setResponseStatus(event, 500);
    return { success: false, data: { error: error, message: "Internal Server Error aaa" }}
  }
});