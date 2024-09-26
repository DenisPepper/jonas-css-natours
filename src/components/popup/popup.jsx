import './popup.scss';

export function Popup() {
  return (
    <div className='popup' id='popup'>
      <div className='popup__content'>
        <a href='#tours-list' className='popup__cross'>❌</a>
      </div>
    </div>
  );
}
