import IComponent from "../Interfaces/component";
import BeerSearchBar from "./beerSearchBar";

const CreateGame: React.FunctionComponent<IComponent> = (props) => {
  return (
    <div>
      <BeerSearchBar name="BeerSearchBar" />
    </div>
  );
};

export default CreateGame;
