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
      <div className="places-list">
         <h2>Things to do during your visit</h2>
        { this._getPlaces() }
       </div>
    );
  }


  _getPlaces() {
    let places = [
      {
        id: 0,
        image: '/',
        name: 'City Museum',
        description: 'Make sure you have at least a few hours to spend exploring this ecclectic spot. City Museum is a favorite destination of both brides - from the meticulous murals to the eerie caves. Make sure to check out the roof!',
        link: 'http://www.citymuseum.org/'
      },
      {
        id: 1,
        image: '/',
        name: 'Gateway Arch',
        description: 'Towering at 630 feet, the St. Louis Gateway Arch is 2.5 times taller than the Statue of Liberty. See where it all began for Lewis and Clark, even if you opt out of the ride to the top.',
        link: 'http://www.gatewayarch.com/'
      },
      {
        id: 2,
        image: '/',
        name: 'South Grand',
        description: 'We may be biased, but this cozy strip of diverse restaurants and shops is worth checking out! Recommendations: Pho Grand, Basil Spice, The Vine, Rooster.',
        link: 'http://southgrand.org/'
      },
      {
        id: 3,
        image: '/',
        name: 'Forest Park',
        description: "Home to STL Art Museum, Zoo, History Museum, and more - not to mention the lush flora and fauna that inhabit the 1,293 acres – Forest Park is one of the city's greatest treasures.",
        link: 'https://www.stlouis-mo.gov/government/departments/parks/parks/Forest-Park.cfm'

      },
      {
        id: 4,
        image: '/',
        name: 'St. Louis Art Museum',
        description: 'St. Louis Art Museum is a treat. Free admission, fascinating art collections spanning centuries and lovely views of Art Hill and the Grand Basin (the exact location of our engagement, nbd).',
        link: 'http://www.slam.org/'

      },
      {
        id: 5,
        image: '/',
        name: 'Soulard',
        description: "Charming cobblestone roads and courtyards adorn St. Louis's oldest neighborhood, Soulard. Visit the Farmer's Market or drop into one of its many bars to engage in Soulard's fav pastime - drinking.",
        link: 'http://www.soulard.org/'

      },

      {
        id: 6,
        image: '/',
        name: 'St. Louis Zoo',
        description: 'Say hi to the animals. The St. Louis zoo is one of the best in the country - and admission is free.',
        link: 'https://www.stlzoo.org/'

      },
      {
        id: 7,
        image: '/',
        name: 'Central West End',
        description: "This trendy and walkable neighborhood has great restaurants and bars. Probably the most 'New York' part of STL.",
        link: 'https://cwescene.com/'

      },
      {
        id: 7,
        image: '/',
        name: 'The Grove',
        description: 'Vibrant LGBTQ neighborhood featuring yummy eats, cute shops and exciting nightlife. Spots to hit: Just John, Handlebar, Attitudes.',
        link: 'http://thegrovestl.com/contact/'

      },
      {
        id: 8,
        image: '/',
        name: 'Contemporary Art Museum',
        description: "Its bizarre, imaginitive and ludacris rotation of exhibits makes CAM an intriguing destination.",
        link: 'http://camstl.org/'

      },
      {
        id: 9,
        image: '/',
        name: 'Delmar Loop',
        description: "Pin-Up Bowl, Vintage Vinyl, The Trolley (if it's working)... with the right attitude, The Loop is a lot of fun.",
        link: 'https://visittheloop.com/'

      },
      {
        id: 10,
        image: '/',
        name: 'Cherokee Street',
        description: 'Antique Row for shoppin, Taqueria El Bronco for grub, Fortune Teller Bar for cocktails, Hop Shop and Earthbound for good beer. Take your pick on this fun stretch of diverse shops.',
        link: 'http://cherokeestreetnews.org/'

      },
      {
        id: 11,
        image: '/',
        name: 'Anheuser-Busch Brewery',
        description: "While you are here, might as well tour one of the country's oldest and largest breweries. The free beer at the end is worth its weight in gold.",
        link: 'http://www.budweisertours.com/'

      }
    ];

    let mapPlaces = places.map(item => {
      return (<Place key={ item.id } name={ item.name } image={ item.image } description={ item.description } link={ item.link } />
        );
      }
    );

    return mapPlaces;
  }

}


export default ToDo;
