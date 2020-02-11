import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import GameTiles from './Components/GameTiles';

function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/" className="font-weight-bold">Memory Game!</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text className="mx-auto font-weight-bold">
            <span id="banner"></span>
          </Navbar.Text>
          <Navbar.Text className="font-weight-bold">
            Score: <span id="score">0</span> | High Score: <span id="high-score">0</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      {/* Title Jumbotron with Instructions */}
      <Jumbotron>
        <h1 className="mb-4">Click Memory Game</h1>
        <p>
          Clicking on an image earns 1 point. <br/>
          Clicking on the same image resets the game! <br/>
          Let's see how high you can go!
        </p>
      </Jumbotron>

      {/* Div which will contain the game on page load. */}
      <GameTiles />
    </div>
  );
}

export default App;
