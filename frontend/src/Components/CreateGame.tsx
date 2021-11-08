import axios from "axios";
import { useState } from "react";
import IComponent from "../Interfaces/component";
import Button from "../UILibrary/button";
import BeerSearchBar from "./beerSearchBar";

const CreateGame: React.FunctionComponent<IComponent> = () => {
  const [gameName, setGameName] = useState<string>("");
  const [gameId, setGameId] = useState<number>(0);

  const gameNameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(e.target.value);
  };

  const handleGameCreation = () => {
    axios
      .post("http://localhost:5000/games", { name: gameName })
      .then(function (response: any) {
        console.log(response.data);
        setGameId(response.data._id);
      });
  };

  if (gameId) {
    return (
      <div>
        <BeerSearchBar gameId={gameId} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Name your game!</h2>
        <input name="gameName" onChange={gameNameInputHandler}></input>
        <Button onClick={handleGameCreation}>Submit Name</Button>
      </div>
    );
  }
};

export default CreateGame;
