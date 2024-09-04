import './heading-tertiary.css';

export function HeadingTertiary(props) {
  const { children, cls } = props;

  return <h3 className={`heading-tertiary ${cls}`}>{children}</h3>;
}
