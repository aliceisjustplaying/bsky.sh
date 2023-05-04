import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ did: 'did:plc:by3jhwdqgbtrcc7q4tkkv3cf' });
}
