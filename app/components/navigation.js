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
          <li>About Us</li>
          <li>Event Details</li>
          <li>R.S.V.P.</li>
          <li>Stay Busy</li>
          <li>Gallery</li>
          <li>Registry</li>
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
