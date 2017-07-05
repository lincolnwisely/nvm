import React from 'react';
import ToDo from './to-do.js'

import style from '../style/scss/style.scss';

class App extends React.Component {
  render()  {
    return(
      <div className="container">
        <div className="hero">
          <h1>Webber-Wisely</h1>
        </div>
        <ToDo />
      </div>
    );
  }
}

export default App;
