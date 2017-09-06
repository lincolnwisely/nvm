import React from 'react';

// let InputGroup = React.createClass({
//   render: function() {
//     return(
//       <label htmlFor={ this.props.id }> { this.props.title }
//         <input id={ this.props.id } name={ this.props.name } type={this.props.type }/>
//       </label>
//     );
//   }
// });

// class InputGroup extends React.Component {
//   render() {
//     return(
//       <label htmlFor={ this.props.id }> { this.props.title }
//         <input id={ this.props.id } name={ this.props.name } type={ this.props.type } value={ this.state.value } />
//       </label>
//     );
//   }
// }

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('A name has been submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return(
//       <form onSubmit={ this.handleSubmit }>
//         <label>
//           First & Last Name(s):
//           <input type="text" value={ this.state.value } onChange={ this.handleChange } />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

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
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name has been submitted: ' + this.state.fullName +"AND Is going: " + this.state.isGoing + " AND total guests:" + this.state.numberOfGuests + "AND wants fb invite?: " + this.state.facebookEvent);
    var form = document.getElementById("form");
    var thanks = document.getElementById("thanks");
    console.log(form);
    form.reset();
    form.style.display = 'none';
    thanks.style.display = 'block';

  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } id="form">
        <label>
          First & Last Name(s):
          <input
            required
            name="fullName"
            type="text"
            value={ this.state.fullName }
            onChange={ this.handleInputChange }
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
        <label>
          Sure, send a private Facebook invitation!
          <input
            name="facebookEvent"
            type="checkbox"
            checked={ this.state.facebookEvent }
            onChange={ this.handleInputChange }
          />
        </label>
        <br/>
        <label>
          Include a note (optional):
          <input
            name="note"
            type="text"
            value={ this.state.note }
            onChange={ this.handleInputChange }
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
        <div>
          <Reservation />
          <Thanks />
        </div>
      // <form className='rsvp'>
      //   <fieldset>
      //     <legend>R.S.V.P.</legend>
      //       <InputGroup id={ 'name' } type={ 'text' } title={ 'Name' }/>
      //       <InputGroup id={ 'email' } type={ 'text' } title={ 'Email' }/>
      //       <InputGroup id={ 'name' } type={ 'radio' } title={ 'Accept with pleasure' }/>
      //       <InputGroup id={ 'name' } type={ 'radio' } title={ 'Respectfully decline' }/>
      //
      //       {/* <input type='radio'  value='Accept with pleasure' checked={ true } />
      //       <input type='radio'  value='Respectfully decline' /> */}
      //
      //
      //   </fieldset>
      // </form>
    );
  }
}

export default Form;
