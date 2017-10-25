import React from 'react';
import axios from 'axios';


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      isGoing: true,
      numberOfGuests: 2,
      facebookEvent: true,
      note: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });

  }

  handleRadioChange(event) {
    this.setState({isGoing: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    // const data = new FormData(this.state); // doesn't work...
//this.state will return an object of the form's state - e.g. data.
// need to send this object to a URL

    alert('A name has been submitted: ' + this.state.fullName +"AND Is going: " + this.state.isGoing + " AND total guests:" + this.state.numberOfGuests + "AND wants fb invite?: " + this.state.facebookEvent);
    let form = document.getElementById("gform");
    // const data = {};
    // const url = 'https://docs.google.com/spreadsheets/d/1uLsm7hRUb2ZAR8DoiBNz4UbnXoJlg7lS1WftXC1E2hQ/edit#gid=0';
    const thanks = document.getElementById("thanks");
// serializeObject() is not a function
    console.log(this.state);
    console.log(form + ' form');
    // console.log(data + ' data');

    form.style.display = 'none';
    thanks.style.display = 'block';

  // from https://stvmlbrn.github.io/2017/04/07/submitting-form-data-with-react.html
  // get our form data out of state
     const { fullName, isGoing, numberOfGuests, note } = this.state;

     axios.post('/', { fullName, isGoing, numberOfGuests, note })
       .then((result) => {
         //access the results here....
       });

//new url https://script.google.com/macros/s/AKfycbxam9lV6hXiRU84F8DxILj3mJ0qgFs8gpkuGSPjwnDoFsD0hS4/exec


    // var url = 'https://script.google.com/macros/s/AKfycbx8ZWCyYjZnz8Ic0FzXXs0BMknchW0L3hwMinWPNIvOiaJLww/exec';
    //
    // var jqxhr = $.ajax({
    //     url: url,
    //     method: "GET",
    //     dataType: "json",
    //     data: form.serializeObject()
    //   }).success(
    //     // do something
    //   );
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbxam9lV6hXiRU84F8DxILj3mJ0qgFs8gpkuGSPjwnDoFsD0hS4/exec">
        <label>
          <input
            required
            name="fullName"
            type="text"
            value={ this.state.fullName }
            onChange={ this.handleInputChange }
            placeholder="First & Last Name"
          />
        </label>
        <br />
        <label>
          Accept with pleasure:
          <input
            name="isGoing"
            type="radio"
            defaultChecked={true}
            value="true"
            checked={ this.state.value }
            onChange={ this.handleRadioChange }
          />
        </label>
        <label>
          Regretfully decline:
          <input
            name="isGoing"
            type="radio"
            defaultChecked={false}
            value="false"
            checked={ this.state.value }
            onChange={ this.handleRadioChange }
          />
        </label>
        <br />
        <label>
          Total Guests
          <select
            name="numberOfGuests"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
        </label>
        <br />
        <input
          name="facebookEvent"
          type="checkbox"
          checked={ this.state.facebookEvent }
          onChange={ this.handleInputChange }
        />
        <label>
          Send a private Facebook invitation!
        </label>
        <br/>
        <label>
          <input
            name="note"
            type="text"
            value={ this.state.note }
            onChange={ this.handleInputChange }
            placeholder="Include a note (optional)"

          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class Thanks extends React.Component {
  render() {
    return(
      <div id="thanks">
        <h4>Thank you for your response!</h4>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return(
      <div className="form-container" id="rsvp">
        <h2>R.S.V.P</h2>
        <Reservation />
        <Thanks />
      </div>
    );
  }
}



export default Form;
