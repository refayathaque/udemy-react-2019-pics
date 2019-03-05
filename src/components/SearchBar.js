import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this)
    // https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined
  }

  onInputChange({ target }) {
    this.setState({ term: target.value })
    console.log(this.state.term)
  }

  render() {
    return(
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" value={this.state.term} onChange={this.onInputChange}/> */}
            {/* By leaving off the parenthesis from onInputChange we are passing in a reference to the callback function to the input element, we want to invoke onInputChange only when the user inputs something, if we left it as onInputChange() then the function would get invoked every time the component rendered */}
            {/* We are passing in a callback function to the event handler, and we always leave out the parenthesis when we do this */}
            {/* onChange is a property name and is a type of event handler, there are other properties that can be used to wire up callback functions to event handlers such as onClick and onSubmit */}
            {/* Event handler properties can also be written using an alternate syntax, using which you do not need to define callbacks as separate functions, you can define and invoke the callback using arrow function syntax by passing the arro functuon to the property itself */}
            {/* Passing arrow function directly to the property (event handler) itself */}
            <input type="text" value={this.state.term} onChange={({ target }) => this.setState({ term: target.value})}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
