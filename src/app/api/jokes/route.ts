import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {

  const jokes = await db.jokes.findMany()
 
  return NextResponse.json(jokes);
}