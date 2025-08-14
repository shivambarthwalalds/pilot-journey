

export async function POST(request: Request) {
  try {
    // Step 1: Authenticate to Odoo
    const loginRes = await fetch('https://crm.pilotspathway.in/web/session/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: {
          db: 'pilotspathwaydb',
          login: 'pilotspathway@gmail.com',
          password: 'admin#123',
        },
      }),
    });

    const loginData = await loginRes.json();

    // Extract session cookie
    const sessionId = loginRes.headers.get('set-cookie')?.match(/session_id=[^;]+/)?.[0];

    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Session cookie missing' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Step 2: Parse request body
    const body = await request.json();

    // Step 3: Call /create_lead/search_engine
    const leadRes = await fetch('https://crm.pilotspathway.in/create_lead/search_engine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic eW91cl9vZG9vX3VzZXJuYW1lOnlvdXJfcGFzc3dvcmQ=', // Replace with your encoded creds
        'Cookie': sessionId, // Pass session_id
      },
      body: JSON.stringify(body),
    });

    const leadData = await leadRes.json();

    return new Response(JSON.stringify(leadData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: 'Lead creation failed', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
