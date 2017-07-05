import React from 'react';
import style from '../style/scss/style.scss';

class Place extends React.Component {
  render() {
    return(
      <div className="place">
        <h3 className="name">{ this.props.name }</h3>
        <p className='description'>{ this.props.description } </p>
        <a href={this.props.link}> Visit the site </a>
      </div>
    );
  }
}

export default Place;
