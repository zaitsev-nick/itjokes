'use client'

import {
  TelegramIcon,
  TelegramShareButton,
  EmailIcon,
  EmailShareButton,
} from 'react-share';

export default function ShareButtonsFooter() {
  const shareUrl = 'https://itjokes.art';
  const title = 'IT Jokes'
  //const image = 

return (
  <div>
    <TelegramShareButton url={shareUrl} title={title} className='mr-2'>
      <TelegramIcon size={25} round iconFillColor='black' />
    </TelegramShareButton>
    <EmailShareButton url={shareUrl} subject={title} body="body" className='mr-2'>
      <EmailIcon size={25} round iconFillColor='black' />
    </EmailShareButton>
  </div>
  )
}