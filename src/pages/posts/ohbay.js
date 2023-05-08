import Head from "next/head";
import Layout from "../../components/layout";
import InputMemo from '../../components/inputMemo'
import Memo from '../../components/Memo'

// https://tomosta.jp/2021/07/nextjs-basic/

export default function Ohbay(props) {
  return (
    <Layout>
      <Head>
        <title>Ohbay</title>
      </Head>

      <h1>Page:Ohbay</h1>
      <InputMemo></InputMemo>
      <br/>
      <Memo text="aaa"></Memo>
      <br/>
      <Memo text="bbb"></Memo>
      <br/>
    </Layout>
  )
}