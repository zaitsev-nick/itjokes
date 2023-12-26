import { db } from '@/lib/db';
import type { JokeInDB } from '@/types/types'
import { NextResponse } from 'next/server';

// POST /api/upload
export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { title, text, width, height, format, bytes, image_url } = body;

    const newJoke = await db.jokes.create({
      data: {
        image_url,
        title: title || 'IT Joke image',
        text: text || 'Share joke and have fun',
        width,
        height,
        format,
        bytes,
      }
    });

    return NextResponse.json({ joke: newJoke, message: 'Joke created' }, { status: 201 })
  } catch(error) {
    return NextResponse.json({ message: 'Somethimg went wrong' }, { status: 500 })
  }
}