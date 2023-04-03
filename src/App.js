import logo from './logo.svg';
import HeaderPers from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';
import './scss/index.scss'
import './scss/_darkMode.scss'
import './scss/footer.scss'
import Works from './components/Works';
import Divider from './components/Divider';
import React, { useContext } from 'react';
import { ThemeContext} from './components/ThemeContext';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { darkMode} = useContext(ThemeContext);

  return (
    <>
      <HeaderPers></HeaderPers>
      <div className={'page-struct ' + (darkMode ? "darkmode-body" : "")}>
        <section className='limits-default'>
          <Project></Project>
          <Skills></Skills>
          <Divider name="Proyectos" id="projects"></Divider>
          <Works></Works>
          <Divider name="Contacto" id="contact"></Divider>
          <Contact></Contact>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
