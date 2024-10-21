

export async function POST(request: Request) {
  try {
    const { name, email, clerkId } = await request.json();

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const response = await fetch("/api/v1/user/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, clerkId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return Response.json({ error: errorData.error }, { status: response.status });
    }

    const data = await response.json();
    return new Response(JSON.stringify({ data }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
