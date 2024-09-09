import { HeadingTertiary as H3 } from '../heading-tertiary/heading-tertiary';
import './story.css';

export function Story(props) {
  const { title, text, imageUrl, author } = props;
  return (
    <li className='story'>
      <div className='story__skew-wrapper'>
        <figure className='story__shape'>
          <img
            className='story__foto'
            src={imageUrl}
            alt='Story author foto.'
          />
          <figcaption className='story__caption'>{author}</figcaption>
        </figure>
        <div className='story__text-wrapper'>
          <H3 cls='story__title'>{title}</H3>
          <p className='.u-margin-bottom-small'>{text}</p>
        </div>
      </div>
    </li>
  );
}
