import React from 'react';

class Details extends React.Component{
  render() {
    return(
      <div className="details" id="details">
        <h2>Details</h2>
        <p>This event blah blah... another paragraph about how fucking awesome we are and how lucky you are to be receiving this invitation!</p>
        <ul>
          <li>Beer & Wine</li>
          <li>location</li>
          <li>Free lot with security</li>
          <li>Bar situation</li>
          <li>drinking and dancing</li>
        </ul>
      </div>
    );
  }
}

export default Details;
