import { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { notify } from "../../Notify";

const Row = ({ firstData, title, setZoneSelect }) => {
  const [open, setOpen] = useState(false);
  const data = [];
  const changeSelect = () => {
    notify("Realiza un click en el mapa para buscar el punto !", "", "info");
    setZoneSelect(firstData);
  };
  return (
    <>
      <TableRow>
        {Object.keys(firstData).length !== 0 &&
          Object.keys(firstData).map((dat, index) => {
            return (
              <TableCell key={index} align="center">
                <strong>{firstData[dat]}</strong>
              </TableCell>
            );
          })}
        <TableCell align="center">
          <button onClick={() => changeSelect()}>Buscar</button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
