import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../UILibrary/button";

export interface IGameCardProps {
  number: number;
  beer: { name: string; style: string; brewery: string; _id: string };
  styleChoices: string[];
  breweryChoices: string[];
  check: (bs: string, ss: string) => any;
}

const GameCard: React.FunctionComponent<IGameCardProps> = (props) => {
  const [styleSelection, setStyleSelection] = useState<string>("");
  const [brewerySelection, setBrewerySelection] = useState<string>("");

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    shuffleArray(props.styleChoices);
    shuffleArray(props.breweryChoices);
  });

  return (
    <GCard>
      <Title>Beer {props.number + 1}</Title>
      <Subtitle>Style - {styleSelection}</Subtitle>
      <AnswerArea>
        {props.styleChoices.map((s, index) => {
          return (
            <Button1
              key={index}
              onClick={() => {
                setStyleSelection(s);
              }}
            >
              {s}
            </Button1>
          );
        })}
      </AnswerArea>
      <Subtitle>Brewery -{brewerySelection}</Subtitle>
      <AnswerArea>
        {props.breweryChoices.map((c, index) => {
          return (
            <Button1
              key={index}
              onClick={() => {
                setBrewerySelection(c);
              }}
            >
              {c}
            </Button1>
          );
        })}
      </AnswerArea>
      <Button onClick={() => props.check(brewerySelection, styleSelection)}>
        Submit Answers
      </Button>
    </GCard>
  );
};

export default GameCard;

const GCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: Column;
`;

const Title = styled.h2`
  font-size: 64px;
  display: flex;
  justify-content: center;
`;

const AnswerArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5em;
`;

const Subtitle = styled.h3`
  font-size: 32px;
  display: flex;
  justify-content: center;
`;

const Button1 = styled.button`
  font-size: 24px;
  padding: 15px 25px;
  background-color: #12a561;
  color: #2d3047;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:active {
    transform: translateY(4px);
  }
  margin: 0.5em;
`;
