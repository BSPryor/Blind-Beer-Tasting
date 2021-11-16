import { useState } from "react";
import IComponent from "../Interfaces/component";
import Button from "../UILibrary/button";
import Input from "../UILibrary/input";
import Game from "./Game";
import { IPlayGame } from "./PlayGame";

const EditGame: React.FunctionComponent<IComponent> = (props) => {
  const [playGame, setPlayGame] = useState<IPlayGame>();

  if (!playGame) {
    return (
      <div>
        <h2>Enter your game name!</h2>
        <Input></Input>
        <Button>Play Game</Button>
      </div>
    );
  } else {
    return (
      <Game
        _id={playGame._id}
        name={playGame.name}
        beers={playGame.beers}
        scores={playGame.scores}
        user={playGame.user}
      ></Game>
    );
  }
};

export default EditGame;
