import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {
  const latestRecord = await db.jokes.findMany({
    take: 1,
    orderBy: {
      id: 'desc',
    }
  });
 
  return NextResponse.json(latestRecord[0]);
}
