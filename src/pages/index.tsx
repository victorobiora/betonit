import Head from "next/head";
import HomePage from "@/components/home/HomePage";
import { useEffect } from "react";

export default function Home() {


  useEffect(() => {
    const check = async () => {
      
        const d = await fetch('https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=1a70c240f4f2b2068b7456231b0a35c9&regions=us&markets=h2h,spreads,totals&bookmakers=mybookieag&oddsFormat=decimal');

        const e = await d.json()

        console.log(e)
    }

     check()
  })
  return (
    <>
      <Head>
        <title>Bet On It</title>
        <meta
          name="description"
          content="a sports betting platform built by next"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/betoniticon.ico" />
      </Head>
      <HomePage/>
    </>
  );
}

/*
export const getStaticProps = async () => {
      
  const initialCall = await fetch('')
}*/
