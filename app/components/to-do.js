import React from 'react';
import Place from './place.js'
import style from '../style/scss/style.scss';

class ToDo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._getPlaces = this._getPlaces.bind(this);
  }

  render () {
    return (
      <div className="places-list" id="todo">
        <div className="container">
         <h2>Stay Busy</h2>
        { this._getPlaces() }
        </div>
     </div>
    );
  }


  _getPlaces() {
    let places = [
      {
        id: 0,
        image: 'app/images/city-museum.jpg',
        name: 'City Museum',
        description: "City Museum is a favorite destination of both brides. Insider's tips: rooftop access is worth the extra $. Wear comfy shoes.",
        link: 'http://www.citymuseum.org/',
        cta: 'Be a kid again'
      },
      {
        id: 1,
        image: 'app/images/arch.jpg',
        name: 'Gateway Arch',
        description: 'See where it all began for Lewis and Clark, even if you opt out of the quirky ride to the top.',
        link: 'http://www.gatewayarch.com/',
        cta: 'Look, it\'s the arch!'
      },
      {
        id: 2,
        image: 'app/images/south-grand.jpg',
        name: 'South Grand',
        description: 'This strip of diverse restaurants and shops is top notch. Recommendations: Pho Grand, Basil Spice, The Vine, Rooster.',
        link: 'http://southgrand.org/',
        cta: 'Ain\'t it grand'
      },
      {
        id: 3,
        image: 'app/images/forestpark.jpg',
        name: 'Forest Park',
        description: "Home to STL Art Museum, Zoo, History Museum, and more. Forest Park is one of the city's greatest treasures.",
        link: 'https://www.stlouis-mo.gov/government/departments/parks/parks/Forest-Park.cfm',
        cta: 'Forest Park 4 Ever'

      },
      {
        id: 4,
        image: 'app/images/budweiser.jpg',
        name: 'Anheuser-Busch Brewery',
        description: "Might as well tour one of the country's oldest and largest breweries. The complimentary pint post-tour is worth its weight in gold.",
        link: 'http://www.budweisertours.com/',
        cta: 'Hops are calling'

      },
      {
        id: 5,
        image: 'app/images/soulard.jpg',
        name: 'Soulard',
        description: "Drop into one of its many bars to engage in Soulard's fav pastime - drinking.",
        link: 'http://www.soulard.org/',
        cta: 'Bar crawl, anyone?'

      },

      {
        id: 6,
        image: 'app/images/zoo.jpg',
        name: 'St. Louis Zoo',
        description: 'Say hi to the animals. The St. Louis zoo is one of the best in the country - and admission is free! Check out the new Grizzly Ridge exhibit.',
        link: 'https://www.stlzoo.org/',
        cta: 'Get wild'

      },
      {
        id: 7,
        image: 'app/images/cwe.jpg',
        name: 'Central West End',
        description: "Prob the most 'New York' part of STL. Go to Dressel's for dinner, Brasserie for brunch, Taste for cocktails.",
        link: 'https://cwescene.com/',
        cta: 'This Way to Yuppietown'

      },
      {
        id: 8,
        image: 'app/images/grove.jpg',
        name: 'The Grove',
        description: 'St. Louis\'s gay-borhood features yummy eats, cute shops and vibrant nightlife. Spots to hit: Just John, Handlebar, Attitudes, Rehab. Tower Classic Tattoo for new ink.',
        link: 'http://thegrovestl.com/contact/',
        cta: 'Shake your Grove thing'

      },
      {
        id: 9,
        image: 'app/images/cam.jpg',
        name: 'Contemporary Art Museum',
        description: "CAM's bizarre, imaginitive and ludacris rotation of exhibits makes it an intriguing destination.",
        link: 'http://camstl.org/',
        cta: 'Artsy Fartsy Fun'

      },
      {
        id: 10,
        image: 'app/images/delmar.jpg',
        name: 'Delmar Loop',
        description: "Pin-Up Bowl, Vintage Vinyl, The Trolley (if it's working)... with the right attitude, The Loop is a lot of fun.",
        link: 'https://visittheloop.com/',
        cta: 'Get in the Loop'

      },
      {
        id: 11,
        image: 'app/images/cherokee.jpg',
        name: 'Cherokee Street',
        description: 'Antique Row for goods, Taqueria El Bronco for grub, Fortune Teller Bar for cocktails, Flowers and Weeds for pure joy.',
        link: 'http://cherokeestreetnews.org/',
        cta: 'Weird/Wonderful Cherokee'

      }
    ];

    let mapPlaces = places.map(item => {
      return (<Place key={ item.id } name={ item.name } image={ item.image } description={ item.description } link={ item.link } cta={ item.cta }/>
        );
      }
    );

    return mapPlaces;
  }

}


export default ToDo;
