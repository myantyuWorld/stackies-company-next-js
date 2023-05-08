import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function Memo(props) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      </FormGroup>
    </>
  )
}