import './tour.css';

export function Tour(props) {
  const { title, details, appearance } = props;
  return (
    <article className='tour-card'>
      <div
        className={`tour-card__side tour-card__back-side tour-card__back-side--${appearance}`}
      ></div>

      <div className='tour-card__side tour-card__front-side'>
        <h4 className={`tour-card__title tour-card__title--${appearance}`}>
          {title}
        </h4>
        <div className={`tour-card__image tour-card__image--${appearance}`}>
          &nbsp;
        </div>
        <div className='tour-card__details'>{details}</div>
      </div>
    </article>
  );
}
