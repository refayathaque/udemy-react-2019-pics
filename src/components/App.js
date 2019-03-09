import React, { Component } from 'react';
import SearchBar from 'components/SearchBar'

class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        {/* We are passing down (as props) a callback function in order to get the child component to pass 'up' its state to this component */}
      </div>
    );
  }
}

export default App;
