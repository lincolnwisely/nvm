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

  constructor(props, context) {
    super(props, context);
    this._getItems = this._getItems.bind(this);
    // this.handleScroll = this.handleScroll.bind(this);
  }

  render() {
    return(
      <nav>
        <ul>
          { this._getItems() }
          {/* <li><a href="#about">About Us</a></li>
          <li><a href="#details">Event Details</a></li>
          <li><a href="#rsvp">R.S.V.P.</a></li>
          <li><a href="#todo">Stay Busy</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#registry">Registry</a></li> */}
        </ul>
      </nav>
    );
  }


  _getItems() {
    let li = [
      { id: 0,
        href: '#about',
        title: 'About Us'
      },
      { id: 1,
        href: '#details',
        title: 'Event Details'
      },
      { id: 2,
        href: '#rsvp',
        title: 'R.S.V.P.'
      },
      { id: 3,
        href: '#todo',
        title: 'Stay Busy'
      },
      { id: 4,
        href: '#lodging',
        title: 'Lodging'
      },
      { id: 5,
        href: '#registry',
        title: 'Registry'
      }
    ];

    let mapItems = li.map(item => {
      return (<li key={ item.id }> <a href={ item.href }>{ item.title }</a></li>
        );
      }
    );
    return mapItems;
  }
}

//   handleScroll(event) {
//
//   }
//     handleScroll: function(event) {
//       let scrollTop = event.srcElement.body.scrollTop,
//           itemTranslate = Math.min(0, scrollTop/3 - 60);
//
//       this.setState({
//         transform: itemTranslate
//       });
//   }

export default Navigation;
