import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import UseCases from './components/UseCases';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <UseCases />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;