import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    width: "100%"
  },
  container: {
    maxHeight: "80vh"
  }
});

const AdvancedTable = props => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const { columns, rows, userListInfo, handlePageChange, onClick } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    handlePageChange(newPage + 1);
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => onClick(row.id)}
                  >
                    {columns.map(column => {
                      const value = row[column.id];
                      return column.type === "image" ? (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ padding: "0px" }}
                        >
                          <img
                            src={value}
                            alt={`${row["first_name"]}'s avatar`}
                            height="40px"
                          ></img>
                        </TableCell>
                      ) : (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[6]}
          component="div"
          count={userListInfo.total}
          rowsPerPage={userListInfo.per_page}
          page={page}
          onChangePage={handleChangePage}
        />
      </Paper>
    </div>
  );
};

export default AdvancedTable;
