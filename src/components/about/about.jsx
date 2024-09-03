import { HeadingSecondary as Header } from '../heading-secondary/heading-secondary';
import './about.css';

const data = {
  header: 'Exciting tours for adventurous people',
};

export function About() {
  return (
    <section className='section-about'>
      <div className='u-place-in-center .u-margin-bottom-8'>
        <Header>{data.header}</Header>
      </div>
      <div className='row'>
        <div className='col-1-of-2'>Text content</div>
        <div className='col-2-of-2'>Images</div>
      </div>
    </section>
  );
}
