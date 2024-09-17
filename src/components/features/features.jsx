import { FeatureCard } from '../feachure-card/feature-card.jsx';
import './features.scss';

const features = [
  {
    title: 'Explore the world',
    text: 'This is a just text without any meaning, but it is important to demonstrate',
    icon: 'icon-basic-world',
  },
  {
    title: 'Meet nature',
    text: 'This is a just text without any meaning, but it is important to demonstrate',
    icon: 'icon-basic-compass',
  },
  {
    title: 'Find your way',
    text: 'This is a just text without any meaning, but it is important to demonstrate',
    icon: 'icon-basic-map',
  },
  {
    title: 'Some one header here',
    text: 'This is a just text without any meaning, but it is important to demonstrate',
    icon: 'icon-basic-heart',
  },
];

export function Features() {
  return (
    <section className='section-features'>
      <div className='features-list'>
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            text={feature.text}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
