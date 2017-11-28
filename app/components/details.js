import React from 'react';

class Details extends React.Component{
  render() {
    return(
      <div className="details" id="details">
        <div className="container">
          <h2>Details</h2>
          <p>Mark your calendars for 7:00 on Friday, March 30th. There will not be a ceremony – we're skipping straight to the fun. (Prior to the reception, we will tie the knot in private at the St. Louis courthouse.) We'll make our grand entrance as *wives* at 7:30 sharp to celebrate with you!</p>
          <div className="detail">
            <h3>Location</h3>
            <p><a href="http://thirddegreeglassfactory.com/">Third Degree Glass Factory</a><br/>
            <a href="https://www.google.com/maps/place/THIRD+DEGREE+GLASS+FACTORY/@38.6521334,-90.2705647,15z/data=!4m5!3m4!1s0x0:0x69cb507645799a4!8m2!3d38.6521334!4d-90.2705647">5200 Delmar Blvd, St. Louis, MO 63108</a></p>
            {/* <iframe className="directions" src="https://www.google.com/maps/d/u/1/embed?mid=1VGafrbPO2bgIFF00H4xmqRDWGBI" width="100%" height="400px"></iframe> */}
          </div>
          <div className="detail">
            <h3>Parking</h3>
            <p>Third Degree has a private lot available with plenty of free parking, as well as a dedicated lot attendant. We encourage guests who plan on imbibing to catch an Uber or Lyft to the venue.</p>
          </div>
          <div className="detail">
            <h3>Food & Drink</h3>
            <p>Guests will be served dinner promptly following our arrival at 7:30. Beer, wine and soft drinks will be provided.</p>
          </div>
          <div className="detail">
            <h3>The Space</h3>
            <p>We'll be eating, drinking and dancing inside - but there is a twinking patio area for overflow.</p>
          </div>
          <div className="detail">
            <h3>Dress Code</h3>
            <p>Festive attire, party clothes, dressy-casual. Or whatever is your thing. We want our guests to wear what makes them feel great.</p>
          </div>
          <div className="detail">
            <h3>Children policy</h3>
            <p>We decided to make this a child-free event. Please leave your kiddos at home.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
