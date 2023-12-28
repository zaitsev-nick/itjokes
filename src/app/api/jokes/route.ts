import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {

  revalidatePath('/')

  const jokes = await db.jokes.findMany({
    orderBy: {
      id: 'desc',
    }
  })
 
  return NextResponse.json(jokes);
}