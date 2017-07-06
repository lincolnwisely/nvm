import React from 'react';
import Navigation from './navigation.js';
import Details from './details.js';
import ToDo from './to-do.js';
import Footer from './footer.js';
import style from '../style/scss/style.scss';

class App extends React.Component {
  render()  {
    return(
      <div className="container">
        <div className="hero">
          <h1>Webber-Wisely</h1>
          <p>---- March 30th, 2018 ----</p>
        </div>
        <Navigation />
        <Details />
        <ToDo />
        <Footer />
      </div>
    );
  }
}

export default App;
