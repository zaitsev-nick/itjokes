import { useState } from 'react';
import type { Metadata } from 'next';
import UploadForm from './UploadForm';

export const metadata: Metadata = {
  title: 'Add IT Joke',
  description: 'Here you can upload any IT joke image',
}

export default function UploadPage() {

  return (
    <div className="">
      <h1 className="font-mono text-2xl lg:text-4xl mt-4 text-center">
        Add IT Joke
      </h1>
      <UploadForm />
    </div>
  )
}