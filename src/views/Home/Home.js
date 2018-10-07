import React, { Component } from "react";
import "./Home.css";

import Thumbnail from "../../components/Thumbnail/Thumbnail";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      images: [
        {
          id: 1,
          caption: "image1",
          message: "clicked image 1",
          imagePath:
            "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200"
        },
        {
          id: 2,
          caption: "image2",
          message: "clicked image 2",
          imagePath:
            "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=350"
        },
        {
          id: 3,
          caption: "image3",
          message: "clicked image 3",
          imagePath:
            "https://st3.depositphotos.com/1808367/15273/i/1600/depositphotos_152730712-stock-photo-the-beautiful-of-poppy-folwer.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="gallery">
        {/*This is react way of commenting code*/}

        {this.state.images &&
          this.state.images.map(image => (
            <Thumbnail
              key={image.id}
              caption={image.caption}
              onClick={() => this.displayMessage(image.message)}
              image={image.imagePath}
            />
          ))}
      </div>
    );
  }

  displayMessage = message => {
    alert(message);
  };
}

export default Home;
