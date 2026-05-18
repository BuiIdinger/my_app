

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

    const { products, email } = body as { products: Product[]; email: string };
    if (!products || !Array.isArray(products)) {
      setResponseStatus(event, 400);
      return { success: false, data: { message: "Products not found" } };
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

    const formatPrice = (priceInCents: number): string => {
      return `$${(priceInCents / 100).toFixed(2)}`;
    };

    // Dynamically map over products into bulletproof table rows
    const productRowsHtml = products.map((product) => {
      // Note: Use absolute URLs for image sources in actual production emails
      return `
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; background-color: #000000; border-radius: 20px;">
        <tr>
          <td style="padding: 0 8px 8px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff757; border: 4px solid #000000; border-radius: 20px;">
              <tr>
                <td style="padding: 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td width="70" valign="middle">
                        <img src="${product.headshot_image_url}" width="60" height="60" alt="${product.name}" style="display: block; border: 4px solid #000000; border-radius: 50%; max-width: 60px; height: auto;" />
                      </td>
                      <td valign="middle" style="font-family: Arial, sans-serif; font-size: 24px; font-weight: 900; color: #000000; padding-left: 15px;">
                        ${product.name}
                      </td>
                    </tr>
                  </table>
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 16px;">
                    <tr>
                      <td align="right" style="font-family: Arial, sans-serif; font-size: 24px; font-weight: 900; color: #000000;">
                        ${formatPrice(product.price)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
    }).join('');

    // The final cross-client compatible HTML string
    const emailHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Flufflings Order Confirmation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    table { border-collapse: collapse !important; }
    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #ffffff; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff;">
  <center>
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff;">
      <tr>
        <td style="padding: 40px 20px;">
          
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff0fb; border: 4px solid #000000; border-radius: 40px;">
            <tr>
              <td>
                
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 40px 40px 20px 40px; font-family: Arial, sans-serif; font-size: 54px; font-weight: bold; color: #000000;">
                      Flufflings
                    </td>
                  </tr>
                </table>

                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 0 40px 40px 40px;">
                      
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                        <tr>
                          <td style="font-family: Arial, sans-serif; font-size: 32px; font-weight: 900; color: #000000;">
                            Your order
                          </td>
                        </tr>
                      </table>

                      ${productRowsHtml}

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 40px; margin-bottom: 24px;">
                        <tr>
                          <td style="font-family: Arial, sans-serif; font-size: 32px; font-weight: 900; color: #000000;">
                            Questions & Answers
                          </td>
                        </tr>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; background-color: #000000; border-radius: 22px;">
                        <tr>
                          <td style="padding: 0 8px 8px 0;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff757; border: 4px solid #000000; border-radius: 22px;">
                              <tr>
                                <td style="padding: 30px;">
                                  <div style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; color: #000000; margin-bottom: 10px;">How to pick up?</div>
                                  <div style="font-family: Arial, sans-serif; font-size: 16px; font-weight: 600; color: #000000; line-height: 1.4;">
                                    Pick ups are available on market day one (27<sup>th</sup> May), come find our booth during the market day and ask to pickup an order.
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; background-color: #000000; border-radius: 22px;">
                        <tr>
                          <td style="padding: 0 8px 8px 0;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff757; border: 4px solid #000000; border-radius: 22px;">
                              <tr>
                                <td style="padding: 30px;">
                                  <div style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; color: #000000; margin-bottom: 10px;">Payment</div>
                                  <div style="font-family: Arial, sans-serif; font-size: 16px; font-weight: 600; color: #000000; line-height: 1.4;">
                                    We accept cash & card for payment. Payment is completed on pickup on market day.
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; background-color: #000000; border-radius: 22px;">
                        <tr>
                          <td style="padding: 0 8px 8px 0;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff757; border: 4px solid #000000; border-radius: 22px;">
                              <tr>
                                <td style="padding: 30px;">
                                  <div style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; color: #000000; margin-bottom: 10px;">Returns & Refunds</div>
                                  <div style="font-family: Arial, sans-serif; font-size: 16px; font-weight: 600; color: #000000; line-height: 1.4;">
                                    All sales are final once you leave the market booth. If there is an issue with your order, please bring it back to our booth before the market closes so we can sort it out for you!
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #000000; border-radius: 22px;">
                        <tr>
                          <td style="padding: 0 8px 8px 0;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fff757; border: 4px solid #000000; border-radius: 22px;">
                              <tr>
                                <td style="padding: 30px;">
                                  <div style="font-family: Arial, sans-serif; font-size: 24px; font-weight: bold; color: #000000; margin-bottom: 10px;">Need help?</div>
                                  <div style="font-family: Arial, sans-serif; font-size: 16px; font-weight: 600; color: #000000; line-height: 1.4;">
                                    Shoot us a DM on Instagram @flufflings_bdsc.
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>
                
              </td>
            </tr>
          </table>

        </td>
      </tr>
    </table>
  </center>
</body>
</html>
  `;

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
            value: emailHtml,
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