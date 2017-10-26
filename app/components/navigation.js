import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class Navigation extends React.Component {

  constructor(props, context) {
    super(props, context);
    this._getItems = this._getItems.bind(this);
    this.state = {
      width: window.innerWidth,
    };
  }

  showSettings (event) {
   event.preventDefault();
 }


  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {

    const { width } = this.state;
    const isMobile = width <= 767;

    if (isMobile) {
      return(
        <div className="backer">
          <Menu className="mobile" width={ '60%' }>
            <ul>
              { this._getItems() }
            </ul>
          </Menu>
        </div>
      );
    }
    else { return(
      <nav>
        <ul>
          { this._getItems() }
        </ul>
      </nav>
    );
    }
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
      return (<li key={ item.id } className="menu-item"> <a href={ item.href } onClick={ this.showSettings }>{ item.title }</a></li>
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
