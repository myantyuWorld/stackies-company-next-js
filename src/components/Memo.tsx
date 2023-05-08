import { Button, Card, CardContent, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function Memo(props) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Card>
      <CardContent>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <Button variant="outlined">x</Button>
      </CardContent>
    </Card>
  )
}