import { Card, CardContent, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ExperienceIndustry(props) {
  return (
    <>
      <Card style={props.style}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }}>業種ランキング</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250, height: 300 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>業種</TableCell>
                  <TableCell align="right">経験年数</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell align="right">{row.career}</TableCell>
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