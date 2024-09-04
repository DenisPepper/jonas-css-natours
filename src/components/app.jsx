import './App.css';
import { About } from './about/about';
import { Features } from './features/features';
import { Header } from './header/header';

export function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
      </main>
    </>
  );
}
