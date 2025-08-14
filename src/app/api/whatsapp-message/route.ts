export async function POST(request: Request) {
  try {
    // ✅ Step 1: Parse form-encoded body
    const formData = await request.formData();

    // ✅ Step 2: Convert FormData into plain object
    const body: Record<string, string> = {};
    formData.forEach((value, key) => {
      body[key] = value.toString();
    });

    console.log("📨 WhatsApp Webhook Payload:", body);

    // ✅ Step 3: Authenticate to Odoo
    const loginRes = await fetch(
      "https://crm.pilotspathway.in/web/session/authenticate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            db: "pilotspathwaydb",
            login: "pilotspathway@gmail.com",
            password: "admin#123",
          },
        }),
      }
    );

    // const loginData = await loginRes.json();

    const sessionId = loginRes.headers
      .get("set-cookie")
      ?.match(/session_id=[^;]+/)?.[0];
    if (!sessionId) {
      return new Response(JSON.stringify({ error: "Session cookie missing" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    // ✅ Step 4: Send data to Odoo
    const leadRes = await fetch(
      "https://crm.pilotspathway.in/create_message/whatsapp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: sessionId,
        },
        body: new URLSearchParams(body).toString(), // You can format it if Odoo expects specific keys
      }
    );
    console.log(leadRes, "dddd");
    const leadData = await leadRes.json();

    return new Response(JSON.stringify(leadData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("❌ Error:", error);
    return new Response(
      JSON.stringify({ error: "Lead creation failed", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
