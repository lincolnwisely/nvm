import React from 'react';
import Navigation from './navigation.js';
import Welcome from './welcome.js';
import Details from './details.js';
// import RSVP from './rsvp.js';
import Form from './form.js';
import Lodging from './lodging.js';
import ToDo from './to-do.js';
import Registry from './registry.js';
// import Insta from './insta.js';
import Footer from './footer.js';
import style from '../style/scss/style.scss';

class App extends React.Component {

  render()  {
    return(
      // <div id="outer-container">
        <div className="wrapper">
          <div className="hero">
            <h1>Webber-Wisely</h1>
            <p>---- March 30th, 2018 ----</p>
          </div>
          <Navigation pageWrapId={ "page-wrap" } className="test" />
          <Welcome />
          <Details />
          <Form />
          <Lodging />
          <ToDo />

          {/* <Insta /> */}
          <Registry />
          <Footer />


        </div>
      // </div>
    );
  }
}

export default App;
