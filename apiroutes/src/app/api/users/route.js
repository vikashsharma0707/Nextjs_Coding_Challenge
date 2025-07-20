// app/api/users/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ users: ['John', 'Jane'] });
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: `User ${body.name} created` }, { status: 201 });
}
