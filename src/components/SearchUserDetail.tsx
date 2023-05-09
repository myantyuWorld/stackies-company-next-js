import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import ExperienceIndustry from "./ExperienceIndustry";
import ExperienceTechnology from "./ExperienceTechnology";
import ExperienceProcess from "./ExperienceProcess";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function SearchUserDetail(props: { data: { user_id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; engineer_career: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; technology_summary: any[]; industry_summary: any[]; workprocess_summary: { rd: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; bd: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; dd: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; cd: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; ut: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; it: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; op: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined; }; }; }) {
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