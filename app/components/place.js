import React from 'react';
import style from '../style/scss/style.scss';

class Place extends React.Component {
  render() {
    return(
      <div className="place">
        <div className="block">
          <h3 className="name">{ this.props.name }</h3>
          <p className='description'>{ this.props.description } </p>
          <a href={this.props.link} target="_blank">Visit the site</a>
        </div>
      </div>
    );
  }
}

export default Place;
