import axios from "axios";
import React from "react";
import styled from "styled-components";
import Button from "../UILibrary/button";

export interface IBeerResultsProps {
  items: [{}];
  gameid: number;
  handleGameFetch: any;
}

const BeerSearchResult: React.FunctionComponent<any> = (props) => {
  const handleBeerAdd = function (e: any) {
    const gi = props.gameId;
    axios
      .post(
        `http://localhost:5000/games/${gi}/beers`,
        props.beers[e.target.value]
      )
      .then(function () {
        props.handleGameFetch(gi);
      });
  };

  if (props.beers.length === 0) {
    return null;
  } else {
    return (
      <StyledResults>
        {props.beers.map((beer: any, index: number) => (
          <StyledBeer key={beer.bid}>
            <StyledInfo>{beer.name}</StyledInfo>
            <StyledInfo>{beer.style}</StyledInfo>
            <StyledInfo>{beer.brewery}</StyledInfo>
            <Button value={index} onClick={handleBeerAdd}>
              Add Beer to Game
            </Button>
          </StyledBeer>
        ))}
      </StyledResults>
    );
  }
};

export default BeerSearchResult;

const StyledResults = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 1em;
`;

const StyledBeer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  font-size: 24px;
  border: 2px solid #2d3047;
  border-radius: 4px;
  justify-content: center;
  padding: 0.5em;
`;

const StyledInfo = styled.p`
  margin: 0.2em;
`;
