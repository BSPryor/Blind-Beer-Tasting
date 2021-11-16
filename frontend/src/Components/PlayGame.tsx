import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import IComponent from "../Interfaces/component";
import Button from "../UILibrary/button";
import Input from "../UILibrary/input";
import Game from "./Game";

export interface IPlayGame {
  _id: string;
  name: string;
  beers: { name: string; brewery: string; style: string; _id: string }[];
  scores: [];
  user: string;
}

const PlayGame: React.FunctionComponent<IComponent> = (props) => {
  const [playGame, setPlayGame] = useState<IPlayGame>();
  const [gameName, setGameName] = useState<string>("");

  const handleGameFind = () => {
    axios
      .get(`http://localhost:5000/game?name=${gameName}`)
      .then((response: any) => setPlayGame(response.data));
  };

  if (!playGame) {
    return (
      <StyledSearch>
        <StyledH2>Enter your game name!</StyledH2>
        <Input
          type="text"
          placeholder="Find Game"
          onChange={(e: any) => setGameName(e.target.value)}
        ></Input>
        <Button onClick={handleGameFind}>Play Game</Button>
      </StyledSearch>
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

export default PlayGame;

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledH2 = styled.h2`
  font-size: 32px;
`;
