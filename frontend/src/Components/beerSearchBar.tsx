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
          client_id: "2FCC00EDE92EA9E6B398B19EA530AC53135592B9",
          client_secret: "511AF6F8646D71B1A7F92FB4A890E45870B46E58",
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
