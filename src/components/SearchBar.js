import React, { Component } from 'react';

class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value)
  }

  render() {
    return(
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange}/>
            {/* By leaving off the parenthesis from onInputChange we are passing in a reference to the function to the input element, we want to invoke onInputChange only when the user inputs something, if we left it as onInputChange() then the function would get invoked every time the component rendered */}
            {/* We are passing in a callback function to the event handler, and we always leave out the parenthesis when we do this */}
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
