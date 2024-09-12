import { NavItem } from '../nav-item/nav-item';
import '/src/components/navigation/navigation.css';

const links = [
  { text: 'About Natours' },
  { text: 'Your benfits' },
  { text: 'Popular tours' },
  { text: 'Stories' },
  { text: 'Book now' },
];

export function Navigation() {
  return (
    <div className='menu'>
      <input className='menu__checkbox' type='checkbox' id='nav-toggler' />
      <label className='menu__button' htmlFor='nav-toggler'>
        MENU
      </label>
      <div className='menu__background'>&nbsp;</div>

      <nav className='menu__nav-wrapper'>
        <ul className='menu__list'>
          {links.map((link, index) => (
            <NavItem key={link.text} text={link.text} number={`${index + 1}.`} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
