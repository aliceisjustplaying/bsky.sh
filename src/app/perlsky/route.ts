export async function GET(request: Request) {
  return new Response(null, {
    status: 302,
    headers: {
      Location: 'https://tangled.org/alice.mosphere.at/perlsky',
    },
  });
}
