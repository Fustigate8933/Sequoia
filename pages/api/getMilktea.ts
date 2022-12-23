import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Milktea } from "../../typings"

const query = groq`*[_type == "milktea"]`

type Data = {
    milkteas: Milktea[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const milkteas: Milktea[] = await sanityClient.fetch(query)
    res.status(200).json({ milkteas })
  }