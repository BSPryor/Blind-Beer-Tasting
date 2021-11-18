import styled from "styled-components";
import TableRow from "../UILibrary/tableRow";

export interface IRow {
  rowData: any;
}

const ScoreBoardRow: React.FunctionComponent<IRow> = (props) => {
  return (
    <TableRow>
      <TableData>{props.rowData.user.name}</TableData>
      <TableData>
        {props.rowData.score.reduce((a: number, b: number) => a + b)}
      </TableData>
    </TableRow>
  );
};

export default ScoreBoardRow;

const TableData = styled.td`
  border: 2px solid #2d3047;
  margin: 0;
`;
