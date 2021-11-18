import styled from "styled-components";
import StyledForm from "../UILibrary/styledForm";
import ScoreBoardRow from "./ScoreBoardRow";

export interface IScoreBoard {
  gameData: any;
}
const ScoreBoard: React.FunctionComponent<IScoreBoard> = (props) => {
  console.log(props.gameData);
  return (
    <StyledForm>
      <ScoreTable>
        <TableRow>
          <th>Name</th>

          <th>Total</th>
        </TableRow>
        {props.gameData.map((rD: any) => (
          <ScoreBoardRow key={rD._id} rowData={rD} />
        ))}
      </ScoreTable>
    </StyledForm>
  );
};

export default ScoreBoard;

const ScoreTable = styled.table`
  font-size: 32px;
  border: 4px solid #2d3047;
  border-radius: 4px;
`;
const TableRow = styled.tr`
  border: 4px solid #2d3047;
`;
