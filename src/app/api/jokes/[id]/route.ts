import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log('request.url',request.url)

  let id = request.url.split('/').pop();

  if(!id) {
    id = request.url.split('/').pop();
  }

  const joke = await db.jokes.findUnique({
    where: {
      id: parseInt(id)
    },
  })

  return NextResponse.json({ joke, ok: true }, { status: 201 });
}

