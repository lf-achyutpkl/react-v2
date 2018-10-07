import React, { Component } from "react";
import "./Home.css";

import Thumbnail from "../../components/Thumbnail/Thumbnail";

class Home extends Component {
  render() {
    return (
      <div className="gallery">
        {/*This is react way of commenting code*/}

        <Thumbnail
          caption="image1"
          onClick={() => this.displayMessage("image1")}
          image="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200"
        />
        <Thumbnail
          caption="image2"
          onClick={() => this.displayMessage("image2")}
          image="https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=350"
        />
        <Thumbnail
          caption="image3"
          onClick={() => this.displayMessage("image3")}
          image="https://st3.depositphotos.com/1808367/15273/i/1600/depositphotos_152730712-stock-photo-the-beautiful-of-poppy-folwer.jpg"
        />
      </div>
    );
  }

  displayMessage = message => {
    alert(message);
  };
}

export default Home;
