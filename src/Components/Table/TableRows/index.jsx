import { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import useAxios from "../../../CustomHooks/useAxios";

const Row = ({ firstData, title, setZoneSelect }) => {
  const [open, setOpen] = useState(false);
  const data = [];
  const changeSelect = () => {
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
