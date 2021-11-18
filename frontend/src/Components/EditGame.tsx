import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../Context/user";
import IComponent from "../Interfaces/component";
import Button from "../UILibrary/button";
import StyledForm from "../UILibrary/styledForm";
import ScoreBoard from "./ScoreBoard";

const EditGame: React.FunctionComponent<IComponent> = (props) => {
  const [gameList, setGameList] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [scoreView, setScoreView] = useState(false);
  const [gD, setGD] = useState<any>();
  const context = useContext(UserContext);
  const uid = context.userState.user._id;
  useEffect(() => {
    axios.get(`http://localhost:5000/games/${uid}`).then((response: any) => {
      console.log(response.data);
      setGameList(response.data);
      setLoading(false);
    });
  }, [uid]);

  const handleScoreView = (id: string) => {
    axios
      .get(`http://localhost:5000/games/${id}/score`)
      .then((response: any) => {
        setGD(response.data);
        setScoreView(true);
      });
  };

  return (
    <div>
      {loading ? <div>Loading Your Games!</div> : null}
      {!loading && !scoreView ? (
        <StyledList>
          <h2>Game List</h2>
          {gameList.map((g: any) => (
            <div key={g._id}>
              <GH3>{g.name}</GH3>
              <Button onClick={() => handleScoreView(g._id)}>
                View Scores
              </Button>
            </div>
          ))}
        </StyledList>
      ) : null}
      {scoreView ? <ScoreBoard gameData={gD} /> : null}
    </div>
  );
};

export default EditGame;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GH3 = styled.h3`
  font-size: 24px;
  margin: 0.5em;
`;
