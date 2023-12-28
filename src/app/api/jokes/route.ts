import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') as string);
  const per_page = parseInt(searchParams.get('per_page') as string);

  const jokes = await db.jokes.findMany({
    skip: page === 1 ? 0 : (page - 1 ) * per_page,
    take: per_page,
    orderBy: {
      id: 'desc',
    }
  })

  revalidatePath('/');
 
  return NextResponse.json(jokes);
}