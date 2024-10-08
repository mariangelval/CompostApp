import './Historial.css'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
    { id: 'kilos', label: 'Kilos', minWidth: 170 },
    { id: 'fecha', label: 'Fecha', minWidth: 100 },

  ];
  
  function createData(kilos, fecha,) {
    return { kilos, fecha};
  }
  
  const rows = [
    createData(23.3, '2024-10-03'),
    createData(24, '2024-09-20'),
    createData(10, '2024-09-09'),
    createData(9, '2024-09-03'),
    createData(8, '2024-08-20'),
    createData(30, '2024-08-01'),
    createData(7, '2024-07-23'),
    createData(20, '2024-07-04'),
    createData(90, '2024-06-25'),
    createData(10, '2024-06-12'),
    createData(20, '2024-05-23'),
    createData(12, '2024-05-01'),
    createData(23, '2024-04-20'),
    createData(25, '2024-04-03'),
    createData(27, '2024-03-16'),
  ];
// informacion sobre el historial de las solicitudes que hizo la escuela ()
function HIstorial() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default HIstorial
