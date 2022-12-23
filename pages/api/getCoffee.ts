import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"
import { Coffee } from "../../typings"

const query = groq`*[_type == "coffee"]`

type Data = {
    coffees: Coffee[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const coffees: Coffee[] = await sanityClient.fetch(query)
    res.status(200).json({ coffees })
  }
