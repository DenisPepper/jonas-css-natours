import './tours.css';
import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import { Tour } from '../tour/tour';

const tours = [
  {
    id: '1',
    appearance: 'gradient-green',
    title: 'The sea explorer',
    details: ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficalty: easy'],
  },
  {
    id: '2',
    appearance: 'gradient-orange',
    title: 'The forest hiker',
    details: ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficalty: easy'],
  },
  {
    id: '3',
    appearance: 'gradient-pink',
    title: 'The snow adventurer',
    details: ['3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficalty: easy'],
  },
];

export function Tours() {
  return (
    <section className='section-tours' >
      <div className='u-place-in-center u-margin-bottom-big'>
        <H2>Most popular tours</H2>
      </div>
      <div className='tours-list' id='tours-list'>
        {tours.map((tour) => (
          <Tour {...tour} key={tour.id} />
        ))}
      </div>
      <a className='btn btn--green tours__link' href='#'>
        Discover our tours
      </a>
    </section>
  );
}
