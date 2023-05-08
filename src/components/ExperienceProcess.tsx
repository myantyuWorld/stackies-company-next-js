import { Card, CardContent, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ExperienceProcess(props) {
  function createData(
    name: string,
    calories: string,
    carbs: string,
  ) {
    return { name, calories, carbs };
  }

  const rows = [
    createData('1', "要件定義", "1"),
    createData('2', "基本設計", "3"),
    createData('3', "詳細設計", "3"),
    createData('4', "製造・評価", "10"),
    createData('5', "運用・保守", "0"),
  ];
  return (
    <>
      <Typography sx={{ fontSize: 24 }}>{props.text}</Typography>
      <Card style={props.style}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }}>経験した作業工程ごとの回数</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250, height: 250 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>工程</TableCell>
                  <TableCell align="right">回数</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.calories}
                    </TableCell>
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