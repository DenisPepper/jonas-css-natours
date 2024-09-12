import './nav-item.css';

export function NavItem(props) {
  const { text } = props;

  return (
    <li className='menu__item'>
      <a className='menu__link' href='#'>
        {text}
      </a>
    </li>
  );
}
