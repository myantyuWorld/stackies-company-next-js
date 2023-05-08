import { Card, CardContent, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ExperienceIndustry(props) {
  function createData(
    name: string,
    calories: string,
    carbs: string,
  ) {
    return { name, calories, carbs };
  }

  const rows = [
    createData('1', "公共", "03年00ヶ月"),
    createData('2', "建築", "01年00ヶ月"),
    createData('3', "AI", "00年09ヶ月"),
    createData('4', "教育", "00年03ヶ月"),
    createData('5', "動画", "00年01ヶ月"),
  ];
  return (
    <>
      <Typography sx={{ fontSize: 24 }}>{props.text}</Typography>
      <Card style={props.style}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }}>業種ランキング</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250, height: 250 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No.</TableCell>
                  <TableCell align="right">業種</TableCell>
                  <TableCell align="right">経験年数</TableCell>
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
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
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