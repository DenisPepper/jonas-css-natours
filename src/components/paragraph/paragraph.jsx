import './paragraph.css';

export function Paragraph(props) {
  const { children } = props;
  return <p className='paragraph'>{children}</p>;
}
