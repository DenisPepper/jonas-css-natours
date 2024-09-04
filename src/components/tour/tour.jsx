import './tour.css';

export function Tour(props) {
  const { backColor } = props;
  return (
    <article className='tour-card'>
      <div className={`tour-card__side tour-card__side--back ${backColor}`}>
        BACK
      </div>
      <div className='tour-card__side tour-card__side--front'>FRONT</div>
    </article>
  );
}
