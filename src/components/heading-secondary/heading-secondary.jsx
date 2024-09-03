import './heading-secondary.css';

export function HeadingSecondary(props) {
  const { children } = props;

  return <h2 className='hedding-seconadary'>{children}</h2>;
}
