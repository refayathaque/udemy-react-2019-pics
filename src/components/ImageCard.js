import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    // React Refs: Gives access to a single DOM element that is rendered by React (used in lieu of `document.querySelector('img')`), we create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { urls, alt_description } = this.props.image;
    // ^ ES6 Destructuring
    return (
      <div>
        <img src={urls.regular} alt={alt_description} ref={this.imageRef} />
      </div>
    )
  }
}

export default ImageCard
