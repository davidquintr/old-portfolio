import logo from './logo.svg';
import HeaderPers from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import './scss/index.scss'


function App() {
  return (
    <>
    <HeaderPers></HeaderPers>
    <section>
      <Project></Project>
      <Skills></Skills>
    </section>
    </>
  );
}

export default App;
