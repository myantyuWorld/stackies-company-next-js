import { Card, CardContent } from "@mui/material";
import Memo from "./Memo";

export default function Memos() {
  return (
    <Card>
      <CardContent>
        <h1>入力済みめも</h1>
        <Memo text="aaa"></Memo>
        <br />
        <Memo text="bbb"></Memo>
      </CardContent>
    </Card>
  )
}