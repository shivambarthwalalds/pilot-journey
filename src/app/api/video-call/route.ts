export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, contact_no, preferred_meeting_time } = body;

    const response = await fetch(
      "https://crm.pilotspathway.in/api/meeting_request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie:
            "frontend_lang=en_US; session_id=LxtCeluzV4trOPRPDoF83TC_C8t1p9FIs56py9EkSD68YG5ZApFwoLFhghm1vYkhIIrtxx5TB6QgwgEdacgW",
        },
        body: JSON.stringify({
          email,
          name,
          contact_no,
          preferred_meeting_time,
        }),
      }
    );

    const result = await response.json();
    console.log("first", result);
    if (!response.ok) {
      return new Response(JSON.stringify(result), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Meeting request submitted successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong",
        error: error?.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
