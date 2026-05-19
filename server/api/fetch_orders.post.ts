
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

    if (token !== "k!pp(PCTR1d~VZfaJQ%*xixTfBO$9XlG1iR_£3##,£UT9.'G?M>7uO'aP~q+aqn&(@u1JNN1A9Sxc{;8B6>e6=qD6Q.kK[-,Rf") {
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