import React from 'react';

class Details extends React.Component{
  render() {
    return(
      <div className="details" id="details">
        <div className="container">
          <h2>Details</h2>
          <p>7:00pm @ Third Degree Glass Factory</p>
          <p>Arin and Lincoln will be getting married at the gorgeous courthouse in Downtown St. Louis prior to the reception. They'll arrive to Third Degree at 7:30 as wife & wife to celebrate with you!</p>

          <h3>Venue Information</h3>
          <p><a href="http://thirddegreeglassfactory.com/">Third Degree Glass Factory</a><br/>
          5200 Delmar Blvd, St. Louis, MO 63108</p>
          <iframe className="directions" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCVqZQqCzOa-wgZpNXY-vWDgyYhW9o75_o&q=Third+Degree+Glass+Factory,StLouis+MO" >
  </iframe>

          <p><i>Parking:</i> Third Degree has a private lot available with plenty of complimentary parking, as well as a dedicated lot attendant. There is also a patio area for overflow (or if the dance floor gets too hot to handle). </p>
          <h3>Food & Drink</h3>
          <p>Guests will be served dinner from Arin and Lincoln's favorite BBQ spot. Come thirsty - beer, wine and soft drinks will be provided at no cost. A full cash bar is available.</p>
        </div>
      </div>
    );
  }
}

export default Details;
