import Head from "next/head";
import Layout from "../../components/layout";
import InputMemo from '../../components/inputMemo'
import Memos from '../../components/Memos'

// https://tomosta.jp/2021/07/nextjs-basic/

export default function Ohbay(props) {
  return (
    <Layout>
      <Head>
        <title>メモ</title>
      </Head>

      <h1>メモ画面</h1>
      <InputMemo></InputMemo>
      <br/>
      <Memos></Memos>

    </Layout>
  )
}