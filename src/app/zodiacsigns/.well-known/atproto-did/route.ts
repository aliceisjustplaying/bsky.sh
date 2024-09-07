export async function GET(request: Request) {
  return new Response('did:plc:cdbp64nijvsmhuhodbuoqcwi', {
    status: 200,
    headers: { 'content-type': 'text/plain' },
  });
}
