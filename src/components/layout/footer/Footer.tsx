import ShareButtonsFooter from '@/components/share/ShareButtonsFooter'

export function Footer() {

  return (
    <footer className='bg-white text-gray-900 border-2 border-t-gray-900 w-full' >
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-bold'>
        <div>&lt;IT Jokes /&#62;</div>
        <div><ShareButtonsFooter /></div>
      </div>
    </footer>
  )
}