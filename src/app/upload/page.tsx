import { useState } from 'react';
import type { Metadata } from 'next';
import UploadForm from './UploadForm';

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function UploadPage() {

  return (
    <div className='container'>

        <h1 className="">
          Image Uploader
        </h1>

        <UploadForm />

    </div>
  )
}