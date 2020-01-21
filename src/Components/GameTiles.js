import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function GameTiles(props) {
  return (
    <Container>
      {props.images.map(image => (
        <Image className="game-tile m-2" src={image} thumbnail />
      ))}
    </Container>
  );
}

export default GameTiles;