import React from 'react';
import Header from './Header';
import Home from './Home';
import UseCases from './UseCases';
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';

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