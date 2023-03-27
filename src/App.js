import logo from './logo.svg';
import HeaderPers from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import './scss/index.scss'
import './scss/_darkMode.scss'
import Works from './components/Works';
import React, { useContext } from 'react';
import { ThemeContext} from './components/ThemeContext';

function App() {
  const { darkMode} = useContext(ThemeContext);

  return (
    <>
      <HeaderPers></HeaderPers>
      <div className={'page-struct ' + (darkMode ? "darkmode-body" : "")}>
        <section className='limits-default'>
          <Project></Project>
          <Skills></Skills>
          <div className={'divider' + (darkMode ? " darkmode-divider" : "")}>
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
