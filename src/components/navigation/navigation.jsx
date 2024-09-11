import '/src/components/navigation/navigation.css';

export function Navigation() {
  return (
    <div className='navigation'>
      <input className='navigation_checkbox' type='checkbox' id='nav_toggler' />
      <label className='navigation_button' htmlFor='nav_toggler'>
        MENU
      </label>
      <div className='navigation_background'>&nbsp;</div>

      <nav className='navigation_nav'>
        <ul className='navigation_list'>
          <li className='navigation_list'>
            <a className='navigation_link' href='#'>
              About Natours
            </a>
          </li>
          <li className='nav_list'>
            <a className='nav_link' href='#'>
              Your benfits
            </a>
          </li>
          <li className='navigation_list'>
            <a className='navigation_link' href='#'>
              Popular tours
            </a>
          </li>
          <li className='navigation_list'>
            <a className='navigation_link' href='#'>
              Stories
            </a>
          </li>
          <li className='navigation_list'>
            <a className='navigation_link' href='#'>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
