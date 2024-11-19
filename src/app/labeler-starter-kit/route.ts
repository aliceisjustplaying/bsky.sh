export async function GET(request: Request) {
  return new Response(null, {
    status: 302,
    headers: {
      'Location': 'https://github.com/aliceisjustplaying/labeler-starter-kit-bsky',
    },
  });
}
