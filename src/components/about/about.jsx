import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import { HeadingTertiary as H3 } from '../heading-tertiary/heading-tertiary';
import { Paragraph as P } from '../paragraph/paragraph';
import { TextButton as A } from '../text-button/text-button';
import './about.scss';
import picPath1 from '/src/assets/nat-1.jpg';
import picPath2 from '/src/assets/nat-2.jpg';
import picPath3 from '/src/assets/nat-3.jpg';
import picPath1Large from '/src/assets/nat-1-large.jpg';
import picPath2Large from '/src/assets/nat-2-large.jpg';
import picPath3Large from '/src/assets/nat-3-large.jpg';

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
        <div>
          <H3 cls='u-margin-bottom-small'>{data.header3_1}</H3>
          <P>{data.stub}</P>
          <H3 cls='u-margin-bottom-small'>{data.header3_2}</H3>
          <P>{data.stub}</P>
          <A href='#'>Learn more &rarr;</A>
        </div>
        <div>
          <div className='composition'>
            <img
              className='composition__photo composition__photo--p1'
              srcSet={`${picPath1} 300w, ${picPath1Large} 1000w`}
              src={picPath1Large} // для старых браузеров
              sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
              alt='Photo 1'
            />
            <img
              className='composition__photo composition__photo--p2'
              srcSet={`${picPath2} 300w, ${picPath2Large} 1000w`}
              src={picPath2Large} // для старых браузеров
              sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
              alt='Photo 2'
            />
            <img
              className='composition__photo composition__photo--p3'
              srcSet={`${picPath3} 300w, ${picPath3Large} 1000w`}
              src={picPath3Large} // для старых браузеров
              sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
              alt='Photo 3'
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
