import { useLayoutEffect, useState } from 'react';
import './app.css';
import { About } from './about/about';
import { Book } from './book/book';
import { Features } from './features/features';
import { Header } from './header/header';
import { Navigation } from './navigation/navigation';
import { Popup } from './popup/popup';
import { Stories } from './stories/stories';
import { Tours } from './tours/tours';

export function App() {
  const [loaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('load', () => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <Navigation />
      <Header />
      {loaded && (
        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
          <Book />
        </main>
      )}
      <Popup />
    </>
  );
}
