
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

    const token: any = body.token;
    if (!token || typeof token !== "string") {
      setResponseStatus(event, 400);
      return {success: false, data: {message: "Invalid"}};
    }

    if (token !== "eSu3Ufu94u4yKvS2USj9qjCZM02jefL8W3UWLvCCvxxrW7F4rrC0BV7FmSf4KpcNNyc2EPWiCRyVhadSVLN3vjAyuxzV8rexGy5a") {
      setResponseStatus(event, 400);
      return {success: false, data: {message: "Invalid"}};
    }

    const { results } = await db.prepare(
      `SELECT * FROM orders`
    ).all();

    setResponseStatus(event, 200);
    return { success: true, data: {
        message: "Success",
        result: results,
    } };
  } catch (error: any) {
    console.error("Database Error:", error);
    setResponseStatus(event, 500);
    return { success: false, data: { error: error, message: "Internal Server Error aaa" }}
  }
});