// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

/* 
    api path가 하나 이상일 때 모두 가져옴
    https://nextjs.org/docs/api-routes/dynamic-api-routes#catch-all-api-routes
*/

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { slug } = req.query
    console.log(slug);
    res.status(200).json({ name: `Slug Test` })
}
