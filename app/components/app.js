import React from 'react';
import Navigation from './navigation.js';
import Welcome from './welcome.js';
import Details from './details.js';
import Form from './form.js';
import Lodging from './lodging.js';
import ToDo from './to-do.js';
import Registry from './registry.js';
import Footer from './footer.js';
import style from '../style/scss/style.scss';

class App extends React.Component {

  render()  {
    return(
        <div className="wrapper">
          <Navigation className="test" />
          <div className="heading">
            <h1>Webber-Wisely</h1>
            <p>Friday, March 30th, 2018</p>
          </div>
          <div className="hero">
          </div>
          <Welcome />
          <Details />
          <Form />
          <Lodging />
          <ToDo />
          <Registry />
          <Footer />
        </div>
    );
  }
}

export default App;
