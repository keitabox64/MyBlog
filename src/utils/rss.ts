import axios from 'axios'
import { parseStringPromise } from 'xml2js'

export interface RssPost {
  title: string
  link: string
  publishedAt: string
  thumbnail?: string
  source: string
}

const fetchRssPosts = async (url: string): Promise<RssPost[]> => {
  // RSSフィードを取得
  const response = await axios.get(url)
  const xml = response.data

  // XMLをJavaScriptオブジェクトに変換
  const parsedXml = await parseStringPromise(xml)

  // 記事データを抽出
  const rssPosts = parsedXml.rss.channel[0].item.map((entry: any): RssPost => {
    const mediaThumbnail = entry['media:thumbnail'] ? entry['media:thumbnail'][0] : undefined
    const enclosureUrl = entry.enclosure ? entry.enclosure[0].$.url : undefined
    const channelLink = parsedXml.rss.channel[0].link[0]
    const source = channelLink.includes('note.com') ? 'note.com' : 'zenn.dev'

    return {
      title: entry.title[0],
      link: entry.link[0],
      publishedAt: new Date(entry.pubDate[0]).toISOString(),
      thumbnail: mediaThumbnail || enclosureUrl || undefined,
      source: source,
    }
  })
  //console.log('Channel:', parsedXml.rss.channel[0])
  console.log('parsedXml', parsedXml)
  console.log('next')
  return rssPosts
}

export { fetchRssPosts }
