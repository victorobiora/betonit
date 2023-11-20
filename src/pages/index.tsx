import Head from "next/head";
import HomePage from "@/components/home/HomePage";


export default function Home() {


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
      <HomePage />
    </>
  );
}
