import './stories.css';
import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import { TextButton as A } from '../text-button/text-button';
import { Story } from '../story/story';
import picPath8 from '/src/assets/nat-8.jpg';
import picPath9 from '/src/assets/nat-9.jpg';

const stories = [
  {
    id: '1',
    author: 'Mary River',
    imageUrl: picPath8,
    title: 'I had the best week ever with my family',
    text: `This is awesome story about my trip witth my family. My trip was fantastic!  
           This is awesome story about my trip witth my family. My trip was fantastic! 
           This is awesome story about my trip witth my family. My trip was fantastic! 
           `,
  },
  {
    id: '2',
    author: 'John Woods',
    imageUrl: picPath9,
    title: 'I had the best week ever with my family',
    text: `This is awesome story about my trip witth my family. My trip was fantastic!  
           This is awesome story about my trip witth my family. My trip was fantastic! 
           This is awesome story about my trip witth my family. My trip was fantastic! 
           `,
  },
];

export function Stories() {
  return (
    <section className='section-stories'>
      <div className='bg-video'>
        <video className='bg-video__content' autoPlay muted loop>
          <source src='/src/assets/video.mp4' type='video/mp4' />
          <source src='/src/assets/video.webm' type='video/webm' />
          Your browser is not siported!
        </video>
      </div>
      <div className='u-place-in-center u-margin-bottom-big'>
        <H2>We make people genuinely happy</H2>
      </div>
      <ul className='stories-list'>
        {stories.map((story) => (
          <Story {...story} key={story.id} />
        ))}
      </ul>
      <A cls='stories__link' href='#'>
        Read all stories &rarr;
      </A>
    </section>
  );
}
