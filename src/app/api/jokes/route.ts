import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {

  const jokes = await db.jokes.findMany({
    orderBy: {
      id: 'desc',
    }
  })
 
  return NextResponse.json(jokes);
}