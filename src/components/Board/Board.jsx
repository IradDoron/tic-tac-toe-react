import styled from 'styled-components';
import Cell from '../Cell/Cell';
import { useState } from 'react';

// Constacts
const BOARD_SIZE = 3;

const PLAYER1 = {
  name: 'player 1',
  sign: 'X',
};

const PLAYER2 = {
  name: 'player 2',
  sign: 'O',
};

// Styled components
const Grid = styled.main`
  display: inline-grid;
  grid-template-columns: repeat(${BOARD_SIZE}, auto);
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;
// Helpers functions

// Component
function Board() {
  const [currPlayer, setCurrPlayer] = useState(PLAYER1);

  function changePlayer() {
    if (currPlayer.name === PLAYER1.name) {
      setCurrPlayer(PLAYER2);
    } else {
      setCurrPlayer(PLAYER1);
    }
  }

  function checkGameLogic(value) {
    console.log('start check logic');
    console.log(value);
    console.log(cells[0]);
    const arrangedCellsData = ((cells) => {
      const resultArr = [];
      for (let cell of cells) {
        // resultArr.push(cell.)
      }
    })(cells);
  }

  function initCellArray(currPlayer) {
    const cellArray = [];

    for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
      cellArray.push(
        <Cell
          setCurrPlayer={setCurrPlayer}
          currPlayer={currPlayer}
          changePlayer={changePlayer}
          checkGameLogic={checkGameLogic}
          key={i}
        />
      );
    }
    return cellArray;
  }

  const cells = initCellArray(currPlayer, setCurrPlayer);

  return (
    <>
      <FlexCenter>
        <FlexCol>
          <h1>Turn: {currPlayer.name}</h1>
          <h1>Sign: {currPlayer.sign}</h1>

          <Grid>{cells.map((value) => value)}</Grid>
        </FlexCol>
      </FlexCenter>
    </>
  );
}

export default Board;
