export async function GET(request: Request) {
  return new Response('did:plc:m2gxxmtdgygsrommldrsggtw', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
