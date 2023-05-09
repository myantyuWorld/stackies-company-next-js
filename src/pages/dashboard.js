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
  // TODO : ここの経験した業種ランキングは、会社全体のデータ
  const industry_summary = [
    {
      "name": "公共",
      "career": "05年00ヶ月"
    },
    {
      "name": "建築",
      "career": "02年01ヶ月"
    },
    {
      "name": "工業",
      "career": "01年01ヶ月"
    },
    {
      "name": "配送",
      "career": "00年11ヶ月"
    },
    {
      "name": "AI",
      "career": "00年05ヶ月"
    }
  ]
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
          <ExperienceIndustry data={industry_summary} style={cardStyle} text="経験業種ランキング(会社全体)"></ExperienceIndustry>
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