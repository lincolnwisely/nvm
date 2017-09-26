import React from 'react';

class RSVP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myNameValue: "",
      canGo: "false"
    };

    this.nameInputChanged = this.nameInputChanged.bind(this);
  }

    nameInputChanged(e) {
      console.log(e.target.value);
      let nameValue = e.target.value;
      this.setState({ myNameValue: nameValue });
    }

    canGoChange(e) {
      //if box is checked,
      this.setState({ canGo: true });
      if this.setState =
    }


  render() {

    let rsvpYes = null;
    if (this.state = { canGo : true }) {
      rsvpYes = <div id="" >
                  <NameInput nameInputValue={ this.state.myNameValue } nameInputChanged={ this.nameInputChanged  } />
                </div>;
      console.log ('it works??');
    };


    return (
      <div className="rsvp" id="rsvp">
        <h2>R.S.V.P.</h2>
        { rsvpYes }
      </div>
    );
  }

}

class canGo extends React.Component {
  render(){
      return(
        <input  name="isGoing"  type="checkbox"  checked={ this.state.canGo }
           />
      );
  }
}

class NameInput extends React.Component {
  render() {
    return (
      <div>
        <input value={ this.props.nameInputValue } onChange={ this.props.nameInputChanged } id="Name" />
      </div>
    );
  }
}


// class NameInput extends React.Component {
//   render() {
//     return (
//       <div>
//         <input value={ this.props.nameInputValue } onChange={ this.props.nameInputChanged } id="Name" />
//       </div>
//     );
//   }
// }

// class GuestCheck extends React.Component {
//   render() {
//     return(
//
//     );
//   }
// }

export default RSVP;
