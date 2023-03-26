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
      <hr className='divider-round'></hr>
    </section>
    </>
  );
}

export default App;
