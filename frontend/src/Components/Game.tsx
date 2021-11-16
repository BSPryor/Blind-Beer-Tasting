import { useEffect, useState } from "react";
import { IPlayGame } from "./PlayGame";

const Game: React.FunctionComponent<IPlayGame> = (props) => {
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [answerChoices, setAnswerChoices] = useState<string[]>();
  const [breweryChoices, setBreweryChoices] = useState<string[]>();

  useEffect(() => {
    if (props.beers.length < 6) {
      let choices = [
        "Lager Pale",
        "Stout Milk",
        "Stout Imperial Double",
        "Pilsner German",
        "IPA American",
        "Wheat Beer Hefewizen",
        "Wheat Beer Witbier",
      ];
      props.beers.map((beer) => {
        return choices.push(beer.style);
      });
      setAnswerChoices(choices);
    } else {
      let choices: string[] = [];
      props.beers.map((beer) => {
        return choices.push(beer.style);
      });
      setAnswerChoices(choices);
    }
  }, [props.beers]);

  return <div>{answerChoices}</div>;
};

export default Game;
