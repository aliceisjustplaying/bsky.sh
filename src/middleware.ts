import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getValidSubdomain } from '@/utils/subdomain';

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files
const DID_PATH_URI = '/.well-known/atproto-did';

export async function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone();

  // Skip public files
  if ((PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) && !url.pathname.includes(DID_PATH_URI)) {
    console.log(`>>> Skipping: ${url.pathname}`);
    return;
  }

  const host = req.headers.get('host');
  const subdomain = getValidSubdomain(host);
  if (subdomain) {
    // Subdomain available, rewriting
    console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
