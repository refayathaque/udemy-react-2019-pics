import React, { Component } from 'react';
import unsplash from 'api/unsplash';
import SearchBar from 'components/SearchBar'
import ImageList from 'components/ImageList'

class App extends Component {
  // state = { images: [] };
  // ^ Alternatively, you can initialize class component state outside the constructor lifecycle method
  constructor(props) {
    super(props)
    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  // onSearchSubmit(term) {
  //   console.log(term);
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: { Authorization: 'Client-ID 6d260733b6a12cac2762299e2ab7ef807387888008e19516b3342834fd6eb523' }
  //     // A 'promise' is an object that will essentially give us a notification when a network request is completed, and the `.then()` function will have a callback inside of it that will be invoked sometime in the future when the promise is resolved (i.e., we get the notification that a network request is complete), the `.then()` function's callback will have its parameter set to whatever data is returned from the network request
  //   }).then((response) => { console.log(response.data.results) });
  // }

  // Alternative to ^ and writing out API calls/network requests is with the `async-await` syntax
  async onSearchSubmit(term) {
    console.log(term);
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: { query: term }
      // Above we are 'awaiting' the promise to be resolved, once it is resolved, we are assigning `response` to the API call's return object
    });
    const { results } = response.data
    this.setState({ images: results })
    console.log(this.state.images)
  }

  // If we don't want to bind the above function we can convert it to an arrow functions
  // onSearchSubmit = async (term) => {
  //   const response = await axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: { Authorization: 'Client-ID 6d260733b6a12cac2762299e2ab7ef807387888008e19516b3342834fd6eb523' }
  //   });
  //   const { results } = response.data
  //   this.setState({ images: results })
  //   console.log(this.state.images)
  // }

  render() {
    const { images } = this.state
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {/* We are passing down (as props) a callback function in order to get the child component to pass 'up' its state to this component */}
        Found: {images.length} images
        <ImageList images={images} />
      </div>
    );
  }
}

export default App;
