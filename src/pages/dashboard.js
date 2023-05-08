import Head from 'next/head';
import Layout from "../components/layout";
import { Card, CardContent, Grid, Stack } from "@mui/material";
import Item from '../components/Item';
import CircleGraph from '../components/CircleGraph';
import ExperienceIndustry from '../components/ExperienceIndustry';

export default function DashBoard() {
  const cardStyle = {
    height: '30vw'
  }
  return (
    <Layout>
      <Head>
        <title>DashBoard</title>
      </Head>
      <h1>DashBoard</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <CircleGraph style={cardStyle} text="グラフ"></CircleGraph>
        </Grid>
        <Grid item xs={6}>
          <ExperienceIndustry style={cardStyle} text="経験業種ランキング"></ExperienceIndustry>
        </Grid>
        <Grid item xs={6}>
          <Item style={cardStyle} text="未定"></Item>
        </Grid>
        <Grid item xs={6}>
          <Item style={cardStyle} text="未定"></Item>
        </Grid>
      </Grid>
    </Layout>
  );
}