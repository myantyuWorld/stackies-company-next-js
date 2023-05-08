import { Button, Card, CardContent, Stack, TextField, Typography } from "@mui/material";

export default function SearchUserInput() {
  return (
    <Card>
    <CardContent>
    <Typography sx={{ fontSize: 24 }}>検索条件</Typography>
    <Stack spacing={4} direction="row">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="outlined">regist</Button>
    </Stack>
    </CardContent>
  </Card>
  )
}