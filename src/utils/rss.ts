import axios from 'axios'
import { parseStringPromise } from 'xml2js'

export interface RssPost {
  title: string
  link: string
  publishedAt: Date
}

const fetchRssPosts = async (url: string): Promise<RssPost[]> => {
  // RSSフィードを取得
  const response = await axios.get(url)
  const xml = response.data

  // XMLをJavaScriptオブジェクトに変換
  const parsedXml = await parseStringPromise(xml)

  // 記事データを抽出
  const rssPosts = parsedXml.feed.entry.map(
    (entry: any): RssPost => ({
      title: entry.title[0],
      link: entry.link[0].$.href,
      publishedAt: new Date(entry.published[0]),
    }),
  )

  return rssPosts
}

export { fetchRssPosts }
