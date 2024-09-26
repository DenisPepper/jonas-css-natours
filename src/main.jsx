import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app.jsx';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// responsive desing
// https://youtu.be/-iqFeek9E7E
// https://youtu.be/6dc-cPS0NSo

/* desctop first

  0 - 600 px   phone        @media(max-width: 600px)   phone
600 - 900 px   tablet      
900 - 1200 px  landscape

normal syles

1800 +         big screens

*/

// responsive images
// https://youtu.be/GoErjVeTaPc
// https://youtu.be/bQHrbZdmRSk
// https://youtu.be/i95vfhmEbGI
// https://youtu.be/YEUDAzT9GzQ

// Testing for Browser Support with supports
// адаптация под старые браузеры
// https://youtu.be/zTPIOOFQVVU
