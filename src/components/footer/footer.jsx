import './footer.scss';
import logoGreen2x from '/src/assets/logo-green-2x.png';
import logoGreen1x from '/src/assets/logo-green-1x.png';
import logoGreen2xSmall from '/src/assets/logo-green-small-2x.png';
import logoGreen1xSmall from '/src/assets/logo-green-small-1x.png';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo-wrapper'>
        <picture className='footer__logo'>
          <source srcSet={`${logoGreen1xSmall} 1x, ${logoGreen2xSmall} 2x`} media='(max-width: 37.5em)' />
          <img srcSet={`${logoGreen1x} 1x, ${logoGreen2x} 2x`} alt='Full logo' src={logoGreen1x} />
        </picture>
      </div>
    </footer>
  );
}

// https://doka.guide/html/picture/
