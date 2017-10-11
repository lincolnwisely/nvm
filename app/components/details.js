import React from 'react';

class Details extends React.Component{
  render() {
    return(
      <div className="details" id="details">
        <div className="container">
          <h2>Details</h2>
          <p>The event will take place at 7:00 on Friday, March 30th. There won't be a ceremony – we're skipping straight to the fun. (Prior to the reception, we will tie the knot in private at the St. Louis courthouse.) We'll make our grand entrance as wife and wife at 7:30 sharp to celebrate with you!</p>
          <h3>About the Venue</h3>
          <p><a href="http://thirddegreeglassfactory.com/">Third Degree Glass Factory</a><br/>
          5200 Delmar Blvd, St. Louis, MO 63108</p>
          {/* <iframe className="directions" src="https://www.google.com/maps/d/u/1/embed?mid=1VGafrbPO2bgIFF00H4xmqRDWGBI" width="100%" height="400px"></iframe> */}

          <h3>Parking</h3>
          <p>Third Degree has a private lot available with plenty of free parking, as well as a dedicated lot attendant. There is also a patio area for overflow (or if the dance floor gets too hot to handle). We encourage guests who plan on imbibing to catch an Uber or Lyft to the venue!</p>
          <h3>Food & Drink</h3>
          <p>Guests will be served dinner immediately following our arrival. Come thirsty; beer, wine and soft drinks will be provided. A full cash bar is available.</p>
          <h3>Dress Code</h3>
          <p>Festive attire, party clothes, dressy-casual. Or whatever is your thing. We want our guests to wear what makes them feel great.</p>
          <h3>Children policy</h3>
          <p>Children are not invited to this event. (Dogs absolutely are, but the venue says otherwise.) Please leave your cutie pies with the sitter.</p>
        </div>
      </div>
    );
  }
}

export default Details;
