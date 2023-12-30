'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Joke } from '@/types/types'

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<any>();
  const [uploadData, setUploadData] = useState();
  const [title, setTitle] = useState<EventTarget & HTMLInputElement | string>();
  const [text, setText] = useState<EventTarget & HTMLInputElement | string>();

  const addToDatabase = async (data: Joke) => {
    const { width, height, format, bytes, secure_url } = data;
 
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_url: secure_url,
          title,
          text,
          width,
          height,
          format,
          bytes,
        }),
      });
      const data = await response.json();

      if(data) {
        router.push(`${process.env.NEXT_PUBLIC_URL}/joke/${data?.joke?.id}`)
      } else {
        console.log('failed upload')
      }
    } catch(error) {
      console.log(error)
    }
  }

  function handleFileChange(changeEvent: any) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent: ProgressEvent<FileReader>) {
      setImageSrc(onLoadEvent?.target?.result);
      setUploadData(undefined);
    }
    
    reader.readAsDataURL(changeEvent.target?.files?.[0]);
  }

  async function handleOnSubmit(event: { preventDefault: () => void; currentTarget: any; }) {
    setLoading(true);
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from<any>(form.elements).find(({ name }: any) => name === 'file');

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }

    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET as string);

    try {
      const data = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL as string, {
        method: 'POST',
        body: formData
      }).then(response => response.json());

      addToDatabase(data);
  
      setImageSrc(data.secure_url);
      setUploadData(data);
    } catch(error) {

    }

  }

  return (
    <>
      {loading ? (
        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      ) : (
        <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
        <h1 className="font-mono text-2xl lg:text-4xl mt-4 text-center">
        Add IT Joke
        </h1>
        <form className="" method="post" onSubmit={handleOnSubmit}>
        <div className="relative border-2 border-gray-300 border-dashed rounded-lg p-6 mb-2" id="dropzone">
          <input type="file" name="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 z-50" />
          <div className="text-center">
              <img className="mx-auto h-12 w-12" src="/image-upload.svg" alt="" />

              <h3 className="mt-2 text-sm font-medium text-gray-900">
                  <label htmlFor="file-upload" className="relative cursor-pointer">
                      <span>Drag and drop</span>
                      <span className="text-indigo-600"> or browse </span>
                      <span>to upload joke image</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                  Any image up to 3MB
              </p>
          </div>

        </div>

        {imageSrc && !uploadData && (
          <div className="bg-white py-4 rounded">
            <div className="relative bg-inherit">
              <input type="text" id="title" name="title" className=" peer bg-transparent w-full rounded text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-900 focus:outline-none focus:border-gray-900" onChange={(e) => setTitle(e.target.value)} placeholder="Type joke title here"/>
              <label htmlFor="title" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-500 peer-focus:text-sm transition-all">Type joke title here</label>
            </div>
          </div>
        )}
        
        <img src={imageSrc} />

        {imageSrc && !uploadData && (
          <div className="bg-white py-4 rounded">
            <div className="relative bg-inherit">
              <textarea id="text" name="text" className=" peer bg-transparent w-full rounded text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-900 focus:outline-none focus:border-gray-900" onChange={(e) => setText(e.target.value)} placeholder="Type joke"/>
              <label htmlFor="text" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-500 peer-focus:text-sm transition-all">Joke text</label>
            </div>
          </div>
        )}
        
        {imageSrc && !uploadData && (
          <div>
            <button className="relative">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">Add this joke</span>
            </button>
          </div>
        )}

      </form>
      </div>
      )}
        
    </>
  )
}