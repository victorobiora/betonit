import Head from "next/head";
import HomePage from "@/components/home/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export default function Home() {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid, user);
        // ...
      } else {
        // User is signed out
        console.log('s,mfnhgd')
        // ...
      }
    });

    console.log(auth.currentUser)
    console.log('dgflkh')

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
