import { Card, CardContent, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReactFragment, ReactPortal, ReactElement, JSXElementConstructor, CSSProperties } from "react";

export default function ExperienceProcess(props: { data: { rd: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; bd: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; dd: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; cd: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; ut: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; it: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; op: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }; }) {
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
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 18 }}>経験した作業工程ごとの回数</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250, height: 300 }} size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>工程</TableCell>
                  <TableCell align="right">回数</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>要件定義</TableCell>
                  <TableCell  align="right">{props.data.rd}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>基本設計</TableCell>
                  <TableCell  align="right">{props.data.bd}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>詳細設計</TableCell>
                  <TableCell  align="right">{props.data.dd}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>製造</TableCell>
                  <TableCell  align="right">{props.data.cd}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>単体評価</TableCell>
                  <TableCell  align="right">{props.data.ut}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>結合・総合評価</TableCell>
                  <TableCell  align="right">{props.data.it}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>運用保守</TableCell>
                  <TableCell  align="right">{props.data.op}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  )
}