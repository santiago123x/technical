import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./TableRows";
import "./index.css";

 const TableComplete = ({
  data,
  filter,
  titles,
  titleDetails,
  recharge,
  setRecharge,
  setZoneSelect
}) => {
  
  

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table size="small" aria-label="collapsible table">
          <TableHead>
            <TableRow  selected hover>
              {titleDetails.length !== 0 ? <TableCell /> : <></>}
              {titles.length !== 0 &&
                titles.map((titulo, index) => {
                  return (
                    <TableCell key={index} align="center">
                      <strong>{titulo}</strong>
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length !== 0 &&
              data.map((dat) => {
                return (
                  <Row
                  setZoneSelect={setZoneSelect}
                    align="center"
                    firstData={dat}
                    subTitles
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}



export default TableComplete;