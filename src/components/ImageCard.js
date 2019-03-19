import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 }

    this.imageRef = React.createRef();
    // React Refs: Gives access to a single DOM element that is rendered by React (used in lieu of `document.querySelector('img')`), we create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props
    this.setSpans = this.setSpans.bind(this);
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
    // Adding an Event Listener (a plain old vanilla JavaScript concept, has nothing to do with React, so not be confused with Event Handlers) to listen for the event 'load', and when the event 'load' is emitted we will invoke the callback `this.setSpans`. 'Load' event is emitted only when the image has succesfully been loaded/downloaded from the unsplash API, and is rendered to the DOM.
  }

  setSpans() {
    const height = this.imageRef.current.clientHeight
    console.log(height);
    const spans = Math.ceil(height / 10)
    // this.setState({ spans: spans });
    // Below is the ES6 refactor for when your key value pair is the same
    this.setState({ spans })
  }
  // ^ Didn't need to bind if it was written as an ES6 Arrow Function

  render() {
    const { urls, alt_description } = this.props.image;
    // ^ ES6 Destructuring
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img src={urls.regular} alt={alt_description} ref={this.imageRef} />
      </div>
    )
  }
}

export default ImageCard
