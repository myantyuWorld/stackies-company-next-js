import Head from 'next/head';
import Layout from "../components/layout";
import { Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import SearchUserInput from "../components/SearchUserInput"
import SearchUserList from "../components/SearchUserList"

export default function SearchUser() {
  return (
    <Layout>
      <Head>
        <title>ユーザー検索</title>
      </Head>
      <h1>ユーザー検索</h1>
      <SearchUserInput></SearchUserInput>
      <br/>
      <SearchUserList></SearchUserList>
    </Layout>
  );
}