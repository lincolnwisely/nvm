import React from 'react';
import firebase from '../firebase.js';


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      isGoing: true,
      numberOfGuests: 2,
      facebookEvent: true,
      note: '',
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
    // alert('A name has been submitted: ' + this.state.fullName +"AND Is going: " + this.state.isGoing + " AND total guests:" + this.state.numberOfGuests + "AND wants fb invite?: " + this.state.facebookEvent);
    let form = document.getElementById("gform");

    const thanks = document.getElementById("thanks");
    console.log(this.state);
    console.log(form + ' form');

    form.style.display = 'none';
    thanks.style.display = 'block';

    const itemsRef = firebase.database().ref('items');
    const item = {
      name: this.state.fullName,
      isGoing: this.state.isGoing,
      number: this.state.numberOfGuests,
      facebookEvent: this.state.facebookEvent,
      note: this.state.note
    }
    itemsRef.push(item);
    this.setState({
      fullName: '',
      isGoing: true,
      numberOfGuests: 2,
      facebookEvent: true,
      note: '',
    });
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
        <h4>Thank you for your response!</h4>
        <h4>Thank you for your response!</h4>
        <h4>Thank you for your response!</h4>
        <h4>Thank you for your response!</h4>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return(
      <div className="form-container container" id="rsvp">
        <h2>R.S.V.P</h2>
        <Reservation />
        <Thanks />
      </div>
    );
  }
}



export default Form;
