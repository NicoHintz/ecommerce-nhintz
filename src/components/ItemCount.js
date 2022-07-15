import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useState } from "react";



export default function ItemCount({stock}) {

  const [count, setCount] = useState(0);
  
  const contador = (operacion) => {
    if (operacion === "-" && count > 0) {
      setCount(count - 1);
    } else if (operacion === "+" && count === stock) {
      alert("no hay stock")
    
    } else if (operacion === "+") {
      setCount(count + 1);
    }
  }
  return (
    <ButtonGroup disableElevation variant="contained" style={{ alignItems: "center" }} >

      <Button onClick={() => contador("-")}>-</Button>
      {count}
      <Button onClick={() => contador("+")}>+</Button>

    </ButtonGroup>
  );

}

