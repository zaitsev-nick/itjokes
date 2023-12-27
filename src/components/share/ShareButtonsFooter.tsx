'use client';

import {
  TelegramIcon,
  TelegramShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  MailruIcon,
  MailruShareButton,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  TwitterShareButton,
  XIcon,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  VKShareCount,
  WhatsappIcon,
  WhatsappShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
} from 'react-share';

export default function ShareButtonsFooter() {
  const shareUrl = 'https://itjokes.art';
  const title = 'IT Jokes';
  const image = 'https://itjokes.art/itjokes.png';

return (
  <div>
    <TelegramShareButton url={shareUrl} title={title} className='mr-2'>
      <TelegramIcon size={28} iconFillColor='black' />
    </TelegramShareButton>
    <FacebookShareButton url={shareUrl}  className='mr-2'>
      <FacebookIcon size={28} iconFillColor='white' />
    </FacebookShareButton>
    <LinkedinShareButton url={shareUrl} title={title}  className='mr-2'>
      <LinkedinIcon size={28} iconFillColor='white' />
    </LinkedinShareButton>
    <MailruShareButton url={shareUrl} title={title}  className='mr-2'>
      <MailruIcon size={28} iconFillColor='white' />
    </MailruShareButton>
    <PinterestShareButton  className='mr-2' url={shareUrl} media={image}>
      <PinterestIcon size={28} iconFillColor='white' />
    </PinterestShareButton>
    <VKShareButton  className='mr-2'  url={shareUrl} title={title}>
      <VKIcon size={28} iconFillColor='white' />
    </VKShareButton>
    <ViberShareButton  className='mr-2' url={shareUrl} title={title}>
      <ViberIcon size={28} iconFillColor='white' />
    </ViberShareButton>
    <TwitterShareButton  className='mr-2'  url={shareUrl} title={title}>
      <XIcon size={28} iconFillColor='white' />
    </TwitterShareButton>
    <WhatsappShareButton  className='mr-2'  url={shareUrl} title={title}>
      <WhatsappIcon size={28} iconFillColor='white' />
    </WhatsappShareButton>
    <TumblrShareButton  className='mr-2'  url={shareUrl} title={title}>
      <TumblrIcon size={28} iconFillColor='white' />
    </TumblrShareButton>
  </div>
  )
}