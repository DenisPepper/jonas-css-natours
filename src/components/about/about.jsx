import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import { HeadingTertiary as H3 } from '../heading-tertiary/heading-tertiary';
import { Paragraph as P } from '../paragraph/paragraph';
import { TextButton as A } from '../text-button/text-button';

import './about.css';

const data = {
  header2: 'Exciting tours for adventurous people',
  header3_1: 'You`re going to fall in love with nature',
  stub: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima ea ut ullam natus rem facilis incidunt tempora vero. Dolor aperiam, exercitationem saepe magnam quod ratione debitis incidunt. Consequuntur, dicta?',
  header3_2: 'Live adventures like you never have before',
};

export function About() {
  return (
    <section className='section-about'>
      <div className='u-place-in-center u-margin-bottom-big'>
        <H2>{data.header2}</H2>
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <H3 cls='u-margin-bottom-small'>{data.header3_1}</H3>
          <P>{data.stub}</P>
          <H3 cls='u-margin-bottom-small'>{data.header3_2}</H3>
          <P>{data.stub}</P>
          <A href='#'>Learn more &rarr;</A>
        </div>
        <div className='col-2-of-2'>
          <div className='composition'>
            <img
              className='composition__photo composition__photo--p1'
              src='/src/assets/nat-1-large.jpg'
              alt='Photo 1'
            />
            <img
              className='composition__photo composition__photo--p2'
              src='/src/assets/nat-2-large.jpg'
              alt='Photo 2'
            />
            <img
              className='composition__photo composition__photo--p3'
              src='/src/assets/nat-3-large.jpg'
              alt='Photo 3'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
