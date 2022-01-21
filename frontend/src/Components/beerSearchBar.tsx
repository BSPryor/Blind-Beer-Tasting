import axios from "axios";
import { useEffect, useState } from "react";
import transformBeerData from "../Services/beerDataTransform";
import Button from "../UILibrary/button";
import Input from "../UILibrary/input";
import StyledForm from "../UILibrary/styledForm";
import BeerSearchResult from "./beerSearchResult";
import EditGameView from "./editGameView";

export interface IBeerSearchBar {
  gameId: number;
}

const BeerSearchBar: React.FunctionComponent<IBeerSearchBar> = (props) => {
  const [beerName, setBeerName] = useState<string>("");
  const [searchResults, setSearchResults] = useState<[]>([]);
  const [game, setGame] = useState({});

  const handleSearch = function () {
    axios
      .get(`https://api.untappd.com/v4/search/beer`, {
        params: {
          client_id: process.env.REACT_APP_CID,
          client_secret: process.env.REACT_APP_CS,
          q: beerName,
        },
      })
      .then(function (response: any) {
        let cleanBeers = transformBeerData(response);
        setSearchResults(cleanBeers);
      });
  };

  const handleGameFetch = function (gameId: number) {
    axios
      .get(`http://localhost:5000/game/${gameId}`)
      .then(function (response: any) {
        setGame(response.data);
      });
  };
  useEffect(() => handleGameFetch(props.gameId), [props.gameId]);

  return (
    <div>
      <StyledForm>
        <Input
          type="text"
          id="query"
          placeholder="Search Beer"
          onChange={(e: any) => setBeerName(e.target.value)}
        ></Input>
        <Button onClick={handleSearch}>Search for a beer</Button>
      </StyledForm>
      <BeerSearchResult
        beers={searchResults}
        gameId={props.gameId}
        handleGameFetch={handleGameFetch}
      />
      <EditGameView game={game} />
    </div>
  );
};

export default BeerSearchBar;
