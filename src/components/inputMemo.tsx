import { Button, Card, CardContent, Stack, TextField } from "@mui/material"

export default function InputMemo() {
  return (
    <Card>
      <CardContent>
        <h1>入力用メモ</h1>
        <Stack spacing={4} direction="row">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="outlined">regist</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}