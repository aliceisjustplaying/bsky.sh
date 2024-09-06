export async function GET(request: Request) {
  return new Response('did:plc:yv4nuaj3jshcuh2d2ivykgiz', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
