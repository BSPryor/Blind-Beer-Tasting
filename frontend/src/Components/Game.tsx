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

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const uniq = function (a: string[]) {
    return Array.from(new Set(a));
  };

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
      const newc = uniq(choices);
      shuffleArray(newc);
      setAnswerChoices(newc);

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
      const newb = uniq(bchoice);
      shuffleArray(newb);
      setBreweryChoices(newb);
    } else {
      let choices: string[] = [];
      props.beers.map((beer) => {
        return choices.push(beer.style);
      });
      const newc = uniq(choices);
      shuffleArray(newc);
      setAnswerChoices(newc);

      let bchoice: string[] = [];
      props.beers.map((beer) => {
        return bchoice.push(beer.brewery);
      });
      const newb = uniq(bchoice);
      shuffleArray(newb);
      setBreweryChoices(newb);
    }
    setLoading(false);
  }, [props.beers]);

  const checkAnswer = (bs: string, ss: string) => {
    const correct = props.beers[number].brewery;
    if (correct === bs) {
      score.push(1);
    } else {
      score.push(0);
    }
    const correctS = props.beers[number].style;
    if (correctS === ss) {
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
