import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const SIZE = '90px';

const CellEl = styled.div`
  height: ${SIZE};
  width: ${SIZE};
  border: solid red;
  padding: 10px;
`;

function Cell({ currPlayer, setCurrPlayer }) {
  const [value, setValue] = useState(null);

  function handleClick() {
    if (currPlayer === 'player1') {
      setValue('X');
      setCurrPlayer('player2');
    } else {
      setValue('O');
      setCurrPlayer('player1');
    }
  }

  useEffect(() => {
    console.log(value);
    console.log(currPlayer);
  }, [value]);

  return (
    <>
      <CellEl onClick={handleClick} />
    </>
  );
}
export default Cell;
