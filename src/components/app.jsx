import './App.css';
import { About } from './about/about';
import { Book } from './book/book';
import { Features } from './features/features';
import { Header } from './header/header';
import { Navigation } from './navigation/navigation';
import { Popup } from './popup/popup';
import { Stories } from './stories/stories';
import { Tours } from './tours/tours';

export function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Book />
      </main>
      <Popup />
    </>
  );
}
