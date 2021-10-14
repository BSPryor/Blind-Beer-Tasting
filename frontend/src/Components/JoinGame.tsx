import Button from "../UILibrary/button";

const JoinGame: React.FunctionComponent<any> = (props) => {
  if (props.beers.length === 0) {
    return null;
  } else {
    return (
      <div>
        {props.beers.map((beer: any) => (
          <div key={beer.bid}>
            {beer.name}
            <br></br>
            {beer.style}
            <br></br>
            {beer.brewery}
            <br></br>
            <Button>Add Beer to Game</Button>
          </div>
        ))}
      </div>
    );
  }
};

export default JoinGame;
