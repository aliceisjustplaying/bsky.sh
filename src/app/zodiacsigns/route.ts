export async function GET(request: Request) {
  return new Response(null, {
    status: 302,
    headers: {
      'Location': 'https://bsky.app/profile/did:plc:cdbp64nijvsmhuhodbuoqcwi',
    },
  });
}
