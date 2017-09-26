import React from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

// export const NavItem = (props) => {
//   return (
//     <li>
//       <NavLink className={ props.className } onClick={ props.onClick } to={ `#${props.to}` }>{ props.title }</NavLink>
//     </li>
//   );
// };

class Navigation extends React.Component {
  render() {
    return(
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#details">Event Details</a></li>
          <li><a href="#rsvp">R.S.V.P.</a></li>
          <li><a href="#todo">Stay Busy</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#registry">Registry</a></li>
        </ul>
      </nav>
    );
  }
}

// NavItem.propTypes = {
//   className: PropTypes.string,
//   onClick: PropTypes.func,
//   to: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired
// }
//
// NavItem.defaultProps = {
//   className: '',
//   onClick: null
// }

export default Navigation;
