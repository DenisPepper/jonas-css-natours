import { About } from './about/about';
import './App.css';
import { Header } from './header/header';

export function App() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
    </>
  );
}
