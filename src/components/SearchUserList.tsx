import { Card, CardContent, Typography } from "@mui/material";
import SearchUserDetail from "./SearchUserDetail";

export default function SearchUserList() {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 24 }}>検索結果</Typography>

        <SearchUserDetail user_name="myantyuWorld"></SearchUserDetail>
        <SearchUserDetail user_name="user1"></SearchUserDetail>
        <SearchUserDetail user_name="user2"></SearchUserDetail>
      </CardContent>
    </Card>
  )
}