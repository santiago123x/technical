import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { FcSearch, FcViewDetails } from "react-icons/fc";

const Search = ({ valueInp, setValueInp, titulo, tooltip }) => {
  return (
    <Paper component="form">
      <Tooltip title={tooltip} placement="top">
        <IconButton  aria-label="menu">
          <FcViewDetails />
        </IconButton>
      </Tooltip>

      <InputBase
        placeholder={titulo}
        inputProps={{ "aria-label": "Filtrar Zona" }}
        value={valueInp}
        onChange={(e) => {
          setValueInp(e.target.value);
        }}
      />

      <IconButton
        type="button"
        aria-label="search"
        disabled
      >
        <FcSearch className="buscar-icono" />
      </IconButton>
    </Paper>
  );
};

export default Search;
