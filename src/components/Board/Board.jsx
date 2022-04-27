import styled from 'styled-components';
import Cell from '../Cell/Cell';
import { useState } from 'react';

const BOARD_SIZE = 3;

const Grid = styled.main`
  display: inline-grid;
  grid-template-columns: repeat(${BOARD_SIZE}, auto);
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function initCellArray({ currPlayer, setCurrPlayer }) {
  const cellArray = [];

  for (let i = 0; i < BOARD_SIZE * BOARD_SIZE; i++) {
    cellArray.push(
      <Cell currPlayer={currPlayer} setCurrPlayer={setCurrPlayer} key={i} />
    );
  }
  return cellArray;
}

function Board() {
  const [currPlayer, setCurrPlayer] = useState('player1');
  const [cellArray, setCellArray] = useState(
    initCellArray({ currPlayer, setCurrPlayer })
  );

  return (
    <>
      <FlexCenter>
        <Grid>
          {cellArray.map((value) => {
            return value;
          })}
        </Grid>
      </FlexCenter>
    </>
  );
}

export default Board;
