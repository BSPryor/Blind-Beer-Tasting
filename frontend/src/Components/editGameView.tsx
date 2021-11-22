export interface IGameView {
  game: any;
}

const EditGameView: React.FunctionComponent<IGameView> = (props) => {
  console.log(props.game);
  if (props.game.beers) {
    return (
      <div>
        <h2>{props.game.name}</h2>
        {props.game.beers.map((beer: any) => {
          return <h3>{beer.name}</h3>;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default EditGameView;
