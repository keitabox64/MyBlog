import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const noteRssUrl = 'https://note.com/k_notebook/rss'
    const response = await axios.get(noteRssUrl, { responseType: 'text' })

    res.setHeader('Content-Type', 'application/rss+xml')
    res.setHeader('Access-Control-Allow-Origin', '*') // CORSヘッダーを設定
    res.status(200).send(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching note RSS feed' })
  }
}
