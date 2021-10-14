import axios from "axios";
import { useState } from "react";
import IComponent from "../Interfaces/component";
import transformBeerData from "../Services/beerDataTransform";
import Button from "../UILibrary/button";
import BeerSearchResult from "./beerSearchResult";

const BeerSearchBar: React.FunctionComponent<IComponent> = (props) => {
  const [beerName, setBeerName] = useState<string>("");
  const [searchResults, setSearchResults] = useState<[]>([]);

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

  return (
    <div>
      <input
        type="text"
        id="query"
        placeholder="Search Beer"
        onChange={(e: any) => setBeerName(e.target.value)}
      ></input>
      <Button onClick={handleSearch}>Search for a beer</Button>
      <BeerSearchResult beers={searchResults} />
    </div>
  );
};

export default BeerSearchBar;
