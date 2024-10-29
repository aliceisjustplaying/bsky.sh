export async function GET(request: Request) {
  return new Response('did:plc:rthoqm6urcjhirils62bys6l', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
