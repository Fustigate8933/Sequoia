import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Other } from "../../typings"

const query = groq`*[_type == "other"]`

type Data = {
    others: Other[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const others: Other[] = await sanityClient.fetch(query)
    res.status(200).json({ others })
  }