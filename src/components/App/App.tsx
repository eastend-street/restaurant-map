import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Reset } from 'styled-reset'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Reset />
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
