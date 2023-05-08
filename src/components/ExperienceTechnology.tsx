import { Card, CardContent, Rating, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ExperienceTechnology(props) {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
  ) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData('C#', 5.0, 6.0, 24),
    createData('Spring boot', 3.0, 9.0, 37),
    createData('Next.js', 3.5, 16.0, 24),
    createData('Nuxt.js', 1.0, 3.7, 67),
    createData('Django', 1.5, 16.0, 49),
  ];
  return (
    <>
      <Typography sx={{ fontSize: 24 }}>{props.text}</Typography>
      <Card style={props.style}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }}>経験技術(TOP5(レベル降順))</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250, height: 250 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>技術名</TableCell>
                  <TableCell align="right">習熟度</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                    <Rating name="half-rating" defaultValue={row.calories} precision={0.5} />
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