import './feature-card.css';
import { HeadingTertiary as H3 } from '../heading-tertiary/heading-tertiary';

export function FeatureCard(props) {
  const { title, text, icon } = props;

  return (
    <div className='feature-box'>
      <H3 cls='feature-box__title'>{title}</H3>
      <p className='feature-box__text'>{text}</p>
      <span className={`feature-box__icon ${icon} u-margin-bottom-small`}></span>
    </div>
  );
}
