import React from 'react';

class Lodging extends React.Component{
  render() {
    return(
      <div className="lodging" id="lodging">
        <div className="container">
          <h2>Lodging</h2>
          <div className="box"><h3><a href="https://www.airbnb.com/s/St%252E-Louis--MO--United-States/homes?place_id=ChIJ-Y7t-qm02IcRW-C7IsrqOb4&refinements%5B%5D=for_you&allow_override%5B%5D=&s_tag=WPuZLpKZ" target="_blank">Air BnB</a></h3><p>We recommend booking an Air Bnb to get a taste of the city's rich history. Look for locations near Forest Park or Tower Grove Park.</p></div>

          <div className="box"><h3><a href="https://www.ihg.com/holidayinnexpress/hotels/us/en/st-louis/stlln/hoteldetail" target="_blank">Holiday Inn Express</a></h3><p>This hotel is located in the Central West End, home to fantastic bars/restaurants.</p></div>

          <div className="box"><h3><a href="http://moonrisehotel.com/" target="_blank">Moonrise Hotel</a></h3><p>This boutique hotel is a 6-minute ride to the venue. Its rooftop deck is perfect for pre-party drinks.</p></div>

          <div className="box"><h3><a href="http://www.cheshirestl.com/" target="_blank">The Cheshire</a></h3><p>Or if it's a quaint British-themed hotel you're after - The Cheshire is a 10-minute Uber or Lyft ride from the venue. Close to Forest Park.</p></div>
      </div>
    </div>
    );
  }
}


export default Lodging;
