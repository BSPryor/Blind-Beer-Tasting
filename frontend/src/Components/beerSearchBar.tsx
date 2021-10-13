import axios from "axios";
import { useState } from "react";
import IComponent from "../Interfaces/component";
import Button from "../UILibrary/button";
import BeerSearchResult from "./beerSearchResult";

const BeerSearchBar: React.FunctionComponent<IComponent> = (props) => {
  const [beerName, setBeerName] = useState<string>("");
  console.log(process.env);
  const handleSearch = function () {
    axios
      .get(`https://api.untappd.com/v4/search/beer`, {
        params: {
          client_id: 
          client_secret: 
          q: beerName,
        },
      })
      .then(function (response: any) {
        console.log(response.data.response.beers);
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
      <Button onClick={handleSearch}></Button>
      <BeerSearchResult name="BeerSearchResult" />
    </div>
  );
};

export default BeerSearchBar;
