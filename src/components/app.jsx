import './App.css';
import { About } from './about/about';
import { Features } from './features/features';
import { Header } from './header/header';
import { Tours } from './tours/tours';

export function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
      </main>
    </>
  );
}
