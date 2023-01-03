import React from 'react';
import {About, Footer, Header, Skills, Testimonial, Travel, Work} from './container';
import {Navbar} from './components';
import '../src/App.scss';

const App = () => {
  return (
    <div classname ='app'>
      <Navbar />
      <Header />
      <About />
      <Travel />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;