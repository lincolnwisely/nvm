import React from 'react';
// import Instafeed from 'react-instafeed';
import InstaImage from './insta-image.js';
const instafeedTarget = 'instafeed';
// let instafilter = function() {
//     // return image.caption.includes('webberwisely');
//     console.log({Instafeed});
//     console.log('nah');
//     var images = document.getElementsByClassName('photo-box');
//
//     // let webberwisely = images.filter(image => image.innerHTML.includes('webberwisely'));
//      console.log(images);
    // var webberwisely = images.includes('webberwisely');
    // if (webberwisely == false) {
    //   images.classList.add('hide');
    // }
    //   add class hide
    // }
    // console.log(webberwisely);


class Insta extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._getImages = this._getImages.bind(this);
  }

render() {
    return (
      // <div id={ instafeedTarget }>
      //   <Instafeed
      //     accessToken='22904349.f300318.c08d9c81a9e942bebc012c7b7f128e82'
      //     limit='200'
      //     ref='instafeed'
      //     resolution='low_resolution'
      //     filter= { instafilter() }
      //     target={ instafeedTarget }
      //     template= '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
      //     userId='22904349'
      //     clientId='f3003180731e4af8a6505a427acd764c'
      //   />
      //
      // </div>
      <div className="image-feed">
        { this._getImages() }
      </div>
    );

  }

  _getImages() {
    let imageList = [
      {
        id: 0,
        src: 'app/images/insta/webberwisely0.jpg',
        caption: ''
      },
      {
        id: 1,
        src: 'app/images/insta/webberwisely1.jpg',
        caption: ''
      },
      {
        id: 2,
        src: 'app/images/insta/webberwisely2.jpg',
        caption: ''
      },
      {
        id: 3,
        src: 'app/images/insta/webberwisely3.jpg',
        caption: ''
      },
      {
        id: 4,
        src: 'app/images/insta/webberwisely4.jpg',
        caption: ''
      },
      {
        id: 5,
        src: 'app/images/insta/webberwisely5.jpg',
        caption: ''
      },
      {
        id: 6,
        src: 'app/images/insta/webberwisely6.jpg',
        caption: ''
      },
      {
        id: 7,
        src: 'app/images/insta/webberwisely7.jpg',
        caption: ''
      },
      {
        id: 8,
        src: 'app/images/insta/webberwisely8.jpg',
        caption: ''
      },
      {
        id: 9,
        src: 'app/images/insta/webberwisely9.jpg',
        caption: ''
      },
      {
        id: 10,
        src: 'app/images/insta/webberwisely10.jpg',
        caption: ''
      },
      {
        id: 11,
        src: 'app/images/insta/webberwisely11.jpg',
        caption: ''
      },
      {
        id: 12,
        src: 'app/images/insta/webberwisely12.jpg',
        caption: ''
      },
      {
        id: 13,
        src: 'app/images/insta/webberwisely13.jpg',
        caption: ''
      },
      {
        id: 14,
        src: 'app/images/insta/webberwisely14.jpg',
        caption: ''
      },
      {
        id: 15,
        src: 'app/images/insta/webberwisely15.jpg',
        caption: ''
      },
      {
        id: 16,
        src: 'app/images/insta/webberwisely16.jpg',
        caption: ''
      },
      {
        id: 17,
        src: 'app/images/insta/webberwisely17.jpg',
        caption: ''
      },
      {
        id: 18,
        src: 'app/images/insta/webberwisely18.jpg',
        caption: ''
      },
      {
        id: 19,
        src: 'app/images/insta/webberwisely19.jpg',
        caption: ''
      },
      {
        id: 20,
        src: 'app/images/insta/webberwisely20.jpg',
        caption: ''
      },
      {
        id: 21,
        src: 'app/images/insta/webberwisely21.jpg',
        caption: ''
      },
      {
        id: 22,
        src: 'app/images/insta/webberwisely22.jpg',
        caption: ''
      },
      {
        id: 23,
        src: 'app/images/insta/webberwisely23.jpg',
        caption: ''
      }
    ]

    let mapImages = imageList.map(image => {
      return (<InstaImage key={ image.id } src={ image.src } caption={ image.caption } />
        );
      }
    );

    return mapImages;
  }



}





export default Insta;
