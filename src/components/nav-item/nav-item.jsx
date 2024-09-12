import './nav-item.css';

export function NavItem(props) {
  const { number, text } = props;

  return (
    <li className='menu__item'>
      <a className='menu__link' href='#'>
        <span>{number}</span>
        {text}
      </a>
    </li>
  );
}
