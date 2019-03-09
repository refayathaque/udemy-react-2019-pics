import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' };
    // this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    // https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined
    // When we 'bind' a function, are are producing a whole new version of that function (essentially a new function altogether), and the new version of the function that is created is fixed with the correct value of 'this', the correct value of 'this' is an instance of this class
    // We take this new function and override the existing function, by assigning the new function to the existing function that has the incorrect 'undefined' value for 'this'
  }

  // When we are in a class-based component we reference the 'props' object with 'this.props'

  // state = { term: '' };

  // 'this' is a reference back to the class itself
  onInputChange({ target }) {
    this.setState({ term: target.value })
    console.log(this.state.term)
  }

  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.term)
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    // Prevents forms from automatically submitting itself when user hits 'enter'
    this.props.onSubmit(this.state.term)
    console.log(this.state.term)
  }
  // One of the special features of ES6 arrow functions is that they automatically bind the value of 'this' to all the code within the block, so we don't have to bind the function to 'this' in the constructor lifecycle method
  // This also works when the callback function passed directly to the event handler property is an arrow function (see below, under 'Event handler properties can also be written using an alternate syntax')

  render() {
    return(
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" value={this.state.term} onChange={this.onInputChange}/> */}
            {/* By leaving off the parenthesis from onInputChange we are passing in a reference to the callback function to the input element, because we want to invoke onInputChange only when the user inputs something, if we left it as onInputChange() then the function would get invoked every time the component rendered */}
            {/* We are passing in a callback function to the event handler, and we always leave out the parenthesis when we do this */}
            {/* onChange is a property name and is a type of event handler, there are other properties that can be used to wire up callback functions to event handlers such as onClick and onSubmit */}
            {/* Event handler properties can also be written using an alternate syntax, using which you do not need to define callbacks as separate functions, you can define and invoke the callback using ES6 arrow function syntax by passing the arrow function to the property itself */}
            {/* Passing arrow function directly to the property (event handler) itself */}
            <input type="text" value={this.state.term} onChange={({ target }) => this.setState({ term: target.value})}/>
            {/* One of the special features of ES arrow functions is that they automatically bind the value of 'this' to all the code within the block */}
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
