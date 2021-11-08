import axios from "axios";
import React from "react";
import Button from "../UILibrary/button";

export interface IBeerResultsProps {
  items: [{}];
  gameid: number;
}

const BeerSearchResult: React.FunctionComponent<any> = (props) => {
  const handleBeerAdd = function (e: any) {
    axios.post(
      `http://localhost:5000/games/${props.gameId}/beers`,
      props.beers[e.target.value]
    );
  };

  if (props.beers.length === 0) {
    return null;
  } else {
    return (
      <div>
        {props.beers.map((beer: any, index: number) => (
          <div key={beer.bid}>
            {beer.name}
            <br></br>
            {beer.style}
            <br></br>
            {beer.brewery}
            <br></br>
            <Button value={index} onClick={handleBeerAdd}>
              Add Beer to Game
            </Button>
          </div>
        ))}
      </div>
    );
  }
};

export default BeerSearchResult;
