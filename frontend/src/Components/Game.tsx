import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/user";
import GameCard from "./gameCard";
import { IPlayGame } from "./PlayGame";
import ScoreBoard from "./ScoreBoard";

const Game: React.FunctionComponent<IPlayGame> = (props) => {
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [answerChoices, setAnswerChoices] = useState<string[]>();
  const [breweryChoices, setBreweryChoices] = useState<string[]>();
  const [score] = useState<number[]>([]);
  const [gameData, setGameData] = useState<any>();
  const context = useContext(UserContext);
  const uid = context.userState.user._id;
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

      let bchoice = [
        "Dogfish Head Craft Brewery",
        "Lagunitas Brewing Company",
        "Goose Island Beer Co.",
        "Tennessee Brew Works",
        "Sierra Nevada Brewing Co.",
        "Stone Brewing",
      ];
      props.beers.map((beer) => {
        return bchoice.push(beer.brewery);
      });
      setBreweryChoices(bchoice);
    } else {
      let choices: string[] = [];
      props.beers.map((beer) => {
        return choices.push(beer.style);
      });
      setAnswerChoices(choices);
      let bchoice: string[] = [];
      props.beers.map((beer) => {
        return bchoice.push(beer.brewery);
      });
      setBreweryChoices(bchoice);
    }
    setLoading(false);
  }, [props.beers]);

  const checkAnswer = (bs: string, ss: string) => {
    const correct = props.beers[number].brewery;
    if (correct === bs) {
      console.log("correct!");
      score.push(1);
    } else {
      score.push(0);
    }
    const correctS = props.beers[number].style;
    if (correctS === ss) {
      console.log("correct style");
      score.push(2);
    } else {
      score.push(0);
    }
    nextBeer();
  };

  const nextBeer = () => {
    const next = number + 1;
    if (next === props.beers.length) {
      axios
        .post(`http://localhost:5000/games/${props._id}/${uid}/score`, {
          score: score,
        })
        .then(() => {
          axios
            .get(`http://localhost:5000/games/${props._id}/score`)
            .then((response: any) => {
              setGameData(response.data);
              setGameOver(true);
            });
        });
    } else {
      setNumber(next);
    }
  };

  console.log(number);
  return (
    <div>
      {number > 0 ? <p>{score.reduce((a, b) => a + b)}</p> : null}
      {gameOver ? <ScoreBoard gameData={gameData} /> : null}
      {!gameOver && !loading ? (
        <GameCard
          number={number}
          beer={props.beers[number]}
          styleChoices={answerChoices!}
          breweryChoices={breweryChoices!}
          check={checkAnswer}
        />
      ) : null}
    </div>
  );
};

export default Game;
