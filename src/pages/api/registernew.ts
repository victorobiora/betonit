// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const createNewUser = await createUserWithEmailAndPassword(
        auth,
        req.body.email,
        req.body.password
      );
      res.status(200).json({ userCredentials: createNewUser, body: req.body });
    } catch (error) {
     res.status(401).json({message: error})
    }
  }
}
