export async function GET(request: Request) {
  return new Response('did:plc:dm6tjhimvcxsgh2yxbppbqkx', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
