import { Card, CardContent, Typography } from "@mui/material";
import SearchUserDetail from "./SearchUserDetail";

export default function SearchUserList(props) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 24 }}>検索結果</Typography>

        {/* TODO : 以下の書き方だと設定できない？ */}
        {/* {props.data.map((item) => {
          <SearchUserDetail data={item}></SearchUserDetail>
        })} */}
        <SearchUserDetail data={props.data[0]}></SearchUserDetail>
        <SearchUserDetail data={props.data[1]}></SearchUserDetail>
      </CardContent>
    </Card>
  )
}