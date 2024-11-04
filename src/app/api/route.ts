export async function GET() {
  console.log("Hello API");
  return new Response(
    JSON.stringify({
      message: "Hello from the API",
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
