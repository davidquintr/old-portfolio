import logo from './logo.svg';
import HeaderPers from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import './scss/index.scss'
import Works from './components/Works';


function App() {
  return (
    <>
    <HeaderPers></HeaderPers>
    <div className='page-struct'>
      <section className='limits-default'>
        <Project></Project>
        <Skills></Skills>
        <div className='divider'>
          <h2 className='divider-text'>Proyectos</h2>
          <span className='divider-round'></span>
        </div>
        <Works></Works>
      </section>
    </div>
    </>
  );
}

export default App;
