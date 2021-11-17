export interface IScoreBoard {
  gameData: any;
}
const ScoreBoard: React.FunctionComponent<IScoreBoard> = (props) => {
  console.log(props.gameData);
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Scores</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{props.gameData[0].user.name}</td>
          <td>{props.gameData[0].score}</td>
          <td>
            {props.gameData[0].score.reduce((a: number, b: number) => a + b)}
          </td>
        </tr>
        <tr>
          <td>16</td>
          <td>14</td>
          <td>10</td>
        </tr>
      </table>
    </div>
  );
};

export default ScoreBoard;
