import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./style.css";

class GameTiles extends Component {

  state = {
    score: 0,
    highScore: 0,
    images : [
      {
        src: "./assets/images/totadile.png",
        picked: false
      },
      {
        src: "./assets/images/squirtle.png",
        picked: false
      },
      {
        src: "./assets/images/pikachu.png",
        picked: false
      },
      {
        src: "./assets/images/psyduck.png",
        picked: false
      },
      {
        src: "./assets/images/phampy.png",
        picked: false
      },
      {
        src: "./assets/images/munchlax.png",
        picked: false
      },
      {
        src: "./assets/images/jirachi.png",
        picked: false
      },
      {
        src: "./assets/images/fenekin.png",
        picked: false
      },
      {
        src: "./assets/images/charmander.png",
        picked: false
      },
      {
        src: "./assets/images/charizard.png",
        picked: false
      },
      {
        src: "./assets/images/bulbasaur.png",
        picked: false
      },
      {
        src: "./assets/images/blastoise.png",
        picked: false
      }
    ]
  };

  handleClick = event => {

    // Get the index in the images array of the image clicked
    const index = event.target.id;

    // Make a copy of the images array in the current state.
    let updatedImages = this.state.images;

    // Make a copy of the score in the current state.
    let updatedScore = this.state.score;

    // Make a copy of the high score in the current state.
    let updatedHighScore = this.state.highScore;

    // Store the banner text displayed to user about the choice they made.
    let bannerText = "";

    // Check if the image has already been picked.
    if (updatedImages[index].picked) {

      // Update high score if the new score is higher than the old high score.
      if (updatedScore > updatedHighScore) {
        updatedHighScore = updatedScore;
      }

      // Reset score to 0.
      updatedScore = 0;

      // Reset all picked booleans to false.
      updatedImages.forEach(image => {
        image.picked = false;
      });

      // Update banner to show incorrect choice.
      bannerText = "Incorrect! You already chose that one.";

    // Image has not already been picked.
    } else {

      // Set picked boolean to true.
      updatedImages[index].picked = true;

      console.log(updatedImages);

      // Shuffle images
      for (let i = updatedImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = updatedImages[i];
        updatedImages[i] = updatedImages[j];
        updatedImages[j] = temp;
      }

      // Update current score.
      updatedScore += 1;

      // Update banner to show correct choice.
      bannerText = "Correct choice!";

    }
    // Update score content in spans
    document.getElementById("score").textContent = updatedScore;
    document.getElementById("high-score").textContent = updatedHighScore;

    // Update banner to reflect correct or incorrect choices.
    document.getElementById("banner").textContent = bannerText;
    
    // Update state to reflect changes.
    this.setState({
      score: updatedScore,
      highScore: updatedHighScore,
      images: updatedImages
    });
  }

  render() {
    return (
      <Container>
        {this.state.images.map(image => (
          <Image 
            className="game-tile m-2" 
            src={image.src}
            key={this.state.images.indexOf(image)}
            id={this.state.images.indexOf(image)} 
            thumbnail 
            onClick={this.handleClick}
          />
        ))}
      </Container>
    );
  }d

}

export default GameTiles;