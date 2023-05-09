import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import ExperienceIndustry from "./ExperienceIndustry";
import ExperienceTechnology from "./ExperienceTechnology";
import ExperienceProcess from "./ExperienceProcess";

export default function SearchUserDetail(props) {
  console.log(props.data)
  return (
    <>
      <Stack spacing={4} direction="row">
        <Typography sx={{ fontSize: 14 }}>{props.data.user_id}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography sx={{ fontSize: 14 }}>エンジニア歴:</Typography>
        <Typography sx={{ fontSize: 14 }}>{props.data.engineer_career}</Typography>
      </Stack>
      <hr />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <ExperienceTechnology data={props.data.technology_summary}></ExperienceTechnology>
        </Grid>
        <Grid item xs={4}>
          <ExperienceIndustry data={props.data.industry_summary}></ExperienceIndustry>
        </Grid>
        <Grid item xs={4}>
          <ExperienceProcess data={props.data.workprocess_summary}></ExperienceProcess>
        </Grid>
      </Grid>
    </>
  )
}