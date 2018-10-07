import React, { Component } from "react";

import "./Thumbnail.css";

class Thumbnail extends Component {
  render() {
    return (
      <div onClick={() => this.props.onClick()} className="gal-img">
        <img src={this.props.image} alt={this.props.alt} />
        <h2>{this.props.caption}</h2>
      </div>
    );
  }
}

export default Thumbnail;
