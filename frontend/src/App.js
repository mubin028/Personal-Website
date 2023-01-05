import React from 'react';
import {About, Footer, Header, Skills, Travel, Projects} from './container';
import {Navbar} from './components';
import '../src/App.scss';

const App = () => {
  return (
    <div classname ='app'>

      <Navbar />
      <Header />
      <About />
      <Travel />
      <Skills />
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;