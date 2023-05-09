import Head from 'next/head';
import Layout from "../components/layout";
import SearchUserInput from "../components/SearchUserInput"
import SearchUserList from "../components/SearchUserList"

export default function SearchUser() {
  // TODO : APIリクエストした結果をセット
  const data = [
    {
      "user_id": "testuser1",
      "engineer_career": "05年01ヶ月",
      "technology_summary": [
        {
          "name": "C#",
          "level": "3.5"
        },
        {
          "name": "Java",
          "level": "3.0"
        },
        {
          "name": "Django",
          "level": "2.0"
        },
        {
          "name": "Next.js",
          "level": "2.0"
        },
        {
          "name": "Nuxt.js",
          "level": "1.0"
        }
      ],
      "industry_summary": [
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
      ],
      "workprocess_summary": {
        "rd": 1,
        "bd": 3,
        "dd": 10,
        "cd": 10,
        "ut": 10,
        "it": 3,
        "op": 0
      }
    },
    {
      "user_id": "myantyuworld",
      "engineer_career": "12年01ヶ月",
      "technology_summary": [
        {
          "name": "C#",
          "level": "3.5"
        },
        {
          "name": "Java",
          "level": "3.0"
        },
        {
          "name": "Django",
          "level": "2.0"
        },
        {
          "name": "Next.js",
          "level": "2.0"
        },
        {
          "name": "Nuxt.js",
          "level": "1.0"
        }
      ],
      "industry_summary": [
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
      ],
      "workprocess_summary": {
        "rd": 1,
        "bd": 3,
        "dd": 10,
        "cd": 10,
        "ut": 10,
        "it": 3,
        "op": 0
      }
    }
  ]
  return (
    <Layout>
      <Head>
        <title>ユーザー検索</title>
      </Head>
      <h1>ユーザー検索</h1>
      <SearchUserInput></SearchUserInput>
      <br />
      <SearchUserList data={data}></SearchUserList>
    </Layout>
  );
}