import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import ExperienceIndustry from "./ExperienceIndustry";
import ExperienceTechnology from "./ExperienceTechnology";
import ExperienceProcess from "./ExperienceProcess";
export default function SearchUserDetail(props) {
  return (
    <>
      <Stack spacing={4} direction="row">
        <Typography sx={{ fontSize: 14 }}>{props.user_name}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Typography sx={{ fontSize: 14 }}>エンジニア歴:</Typography>
        <Typography sx={{ fontSize: 14 }}>05年00ヶ月</Typography>
      </Stack>
      <hr />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <ExperienceTechnology></ExperienceTechnology>
        </Grid>
        <Grid item xs={4}>
          <ExperienceIndustry></ExperienceIndustry>
        </Grid>
        <Grid item xs={4}>
          <ExperienceProcess></ExperienceProcess>
        </Grid>
      </Grid>
    </>
  )
}