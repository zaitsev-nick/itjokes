import {
  TelegramIcon,
  TelegramShareButton,
  EmailIcon,
  EmailShareButton,
} from 'react-share';

type ShareButtonsProps = {
  props: {
    shareUrl: string;
    title?: string;
    image: string;
  }
};

export default function ShareButtons({ props }: ShareButtonsProps) {
  const { shareUrl, title, image } = props;

return (
  <div>
    <TelegramShareButton url={shareUrl} title={title} className='mr-2'>
      <TelegramIcon size={38} round />
    </TelegramShareButton>
    <EmailShareButton url={shareUrl} subject={title} body="body" className='mr-2'>
      <EmailIcon size={38} round />
    </EmailShareButton>
  </div>
  )
}