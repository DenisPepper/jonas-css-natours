import './tours.css';
import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import { Tour } from '../tour/tour';

const tours = [
  {
    id: '1',
    backColor: 'gradient-green',
  },
  {
    id: '2',
    backColor: 'gradient-orange',
  },
  {
    id: '3',
    backColor: 'gradient-pink',
  },
];

export function Tours() {
  return (
    <section className='section-tours'>
      <div className='u-place-in-center u-margin-bottom-big'>
        <H2>Most popular tours</H2>
      </div>
      <div className='tours-list'>
        {tours.map((tour) => (
          <Tour key={tour.id} backColor={tour.backColor} />
        ))}
      </div>
    </section>
  );
}
