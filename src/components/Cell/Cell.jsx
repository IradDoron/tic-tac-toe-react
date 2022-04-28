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

function Cell({ currPlayer, setCurrPlayer, changePlayer }) {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue(currPlayer.sign);
    changePlayer();
  }

  return (
    <>
      <CellEl onClick={handleClick}>{value}</CellEl>
    </>
  );
}
export default Cell;
