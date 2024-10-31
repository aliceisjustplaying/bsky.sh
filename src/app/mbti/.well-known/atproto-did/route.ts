export async function GET(request: Request) {
  return new Response('did:plc:2hjiighgnarqscwwk2cesnup', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
