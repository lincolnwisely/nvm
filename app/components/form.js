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

class InputGroup extends React.Component {
  render() {
    return(
      <label htmlFor={ this.props.id }> { this.props.title }
        <input id={ this.props.id } name={ this.props.name } type={ this.props.type } />
      </label>
    );
  }
}


class Form extends React.Component {
  render() {
    return(
      <form className='rsvp'>
        <fieldset>
          <legend>R.S.V.P.</legend>
            <InputGroup id={ 'name' } type={ 'text' } title={ 'Name' }/>
            <InputGroup id={ 'email' } type={ 'text' } title={ 'Email' }/>
            <InputGroup id={ 'name' } type={ 'radio' } title={ 'Accept with pleasure' }/>
            <InputGroup id={ 'name' } type={ 'radio' } title={ 'Respectfully decline' }/>

            {/* <input type='radio'  value='Accept with pleasure' checked={ true } />
            <input type='radio'  value='Respectfully decline' /> */}


        </fieldset>
      </form>
    );
  }
}

export default Form;
