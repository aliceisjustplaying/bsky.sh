export async function GET(request: Request) {
  return new Response(null, {
    status: 302,
    headers: {
      'Location': 'https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf',
    },
  });
}
