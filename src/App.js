import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Footer copyright="Shirley Ramirez" />
      </>
    );
  }
}

export default App;
