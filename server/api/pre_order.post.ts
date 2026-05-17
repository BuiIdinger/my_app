import * as UUID from "uuid";

const customHtml: string = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pre-Order Confirmed</title>
  </head>
<body style="margin: 0; padding: 40px 20px; background-color: #f0f0f0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" max-width="660" style="max-width: 660px; width: 100%; background-color: #fff0fb; border: 4px solid #000000; border-radius: 100px 100px 0 0; box-shadow: 8px 8px 0px 0px #000000; border-collapse: separate;">
    <tr>
      <td style="padding: 60px 40px;">
        
        <h1 style="margin: 0 0 44px 0; font-size: 42px; font-weight: 900; line-height: 1.1; color: #000000; max-width: 512px;">
          Your Pre-Order has been confirmed
        </h1>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 34px; background-color: #fff757; border: 4px solid #000000; border-radius: 22px; box-shadow: 8px 8px 0px 0px #000000; border-collapse: separate;">
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold; color: #000000;">How to pick up?</h2>
              <p style="margin: 0; font-size: 18px; font-weight: 500; line-height: 1.5; color: #000000;">
                Pick ups are available on market day one (27<sup>th</sup> May), come find our booth during the market day and ask to pickup an order.
              </p>
            </td>
          </tr>
        </table>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 34px; background-color: #fff757; border: 4px solid #000000; border-radius: 22px; box-shadow: 8px 8px 0px 0px #000000; border-collapse: separate;">
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold; color: #000000;">Payment</h2>
              <p style="margin: 0; font-size: 18px; font-weight: 500; line-height: 1.5; color: #000000;">
                We accept cash & card for payment. Payment is completed on pickup on market day.
              </p>
            </td>
          </tr>
        </table>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 34px; background-color: #fff757; border: 4px solid #000000; border-radius: 22px; box-shadow: 8px 8px 0px 0px #000000; border-collapse: separate;">
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold; color: #000000;">Returns & Refunds</h2>
              <p style="margin: 0; font-size: 18px; font-weight: 500; line-height: 1.5; color: #000000;">
                All sales are final once you leave the market booth. If there is an issue with your order, please bring it back to our booth before the market closes so we can sort it out for you!
              </p>
            </td>
          </tr>
        </table>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 0; background-color: #fff757; border: 4px solid #000000; border-radius: 22px; box-shadow: 8px 8px 0px 0px #000000; border-collapse: separate;">
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 10px 0; font-size: 28px; font-weight: bold; color: #000000;">Need help?</h2>
              <p style="margin: 0; font-size: 18px; font-weight: 500; line-height: 1.5; color: #000000;">
                Shoot us a DM on Instagram @fluffings_bdsc.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

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
          email: "noreply@fluffings.co.nz"
        },
        subject: "Flufflings | Your Pre-Order has been placed",
        content: [
          {
            type: 'text/html',
            value: customHtml,
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