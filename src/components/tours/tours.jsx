import './tours.css';
import { HeadingSecondary as H2 } from '../heading-secondary/heading-secondary';
import { Tour } from '../tour/tour';

const tours = [
  {
    id: '1',
    appearance: 'gradient-green',
    title: 'The sea explorer',
    details: 'This is a mocked details of this card ...',
  },
  {
    id: '2',
    appearance: 'gradient-orange',
    title: 'The forest hiker',
  },
  {
    id: '3',
    appearance: 'gradient-pink',
    title: 'The snow adventurer',
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
          <Tour {...tour} key={tour.id} />
        ))}
      </div>
    </section>
  );
}
