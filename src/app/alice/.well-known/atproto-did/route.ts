export async function GET(request: Request) {
  return new Response('did:plc:by3jhwdqgbtrcc7q4tkkv3cf', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
