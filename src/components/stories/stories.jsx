import './stories.css';
import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import { TextButton as A } from '../text-button/text-button';
import { Story } from '../story/story';

const stories = [
  {
    id: '1',
    author: 'Mary River',
    imageUrl: '/src/assets/nat-8.jpg',
    title: 'I had the best week ever with my family',
    text: `This is awesome story about my trip witth my family. My trip was fantastic!  
           This is awesome story about my trip witth my family. My trip was fantastic! 
           This is awesome story about my trip witth my family. My trip was fantastic! 
           `,
  },
  {
    id: '2',
    author: 'John Woods',
    imageUrl: '/src/assets/nat-9.jpg',
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
      <div className='u-place-in-center u-margin-bottom-big'>
        <H2>We make people genuinely happy</H2>
      </div>
      <ul className='stories-list'>
        {stories.map((story) => (
          <Story {...story} key={story.id} />
        ))}
      </ul>
      <A cls='stories__link' href='#'>Read all stories &rarr;</A>
    </section>
  );
}
