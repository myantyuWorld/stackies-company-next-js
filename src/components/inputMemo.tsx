import { Button, Stack, TextField } from "@mui/material"

export default function InputMemo() {
  return (
    <Stack spacing={4} direction="row">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="outlined">regist</Button>
    </Stack>
  )
}