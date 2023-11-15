import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req)
  if (req.method === "POST") {
    try {
      const signInUser = await signInWithEmailAndPassword(
        auth,
        req.body.email,
        req.body.password
      );
        res.status(200).json({ userCredentials: signInUser, body: req.body });
    } catch (error) {
      console.log(error)
      throw new Error ('{ error: error }')
    }
  }
}
