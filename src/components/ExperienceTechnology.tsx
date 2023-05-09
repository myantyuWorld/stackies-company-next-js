import { Card, CardContent, Rating, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ExperienceTechnology(props) {
  return (
    <>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 18 }}>経験技術(TOP5(レベル降順))</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250, height: 300 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>技術名</TableCell>
                  <TableCell align="right">習熟度</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      <Rating name="half-rating" defaultValue={Number(row.level)} precision={0.5} readOnly />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  )
}