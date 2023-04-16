import { RssPost, fetchRssPosts } from './rss'

const vercelDomain = process.env.NEXT_PUBLIC_VERCEL_URL
const zennFeedDomain = process.env.NEXT_PUBLIC_ZENN_URL
const noteUrl = `${vercelDomain}/api/note-rss-proxy`
const zennUrl = `${zennFeedDomain}`

const getAggregatedPosts = async (): Promise<RssPost[]> => {
  // 各サービスから記事データを取得
  const notePosts = await fetchRssPosts(noteUrl)
  const zennPosts = await fetchRssPosts(zennUrl)

  // 記事データを結合
  const aggregatedPosts: RssPost[] = [...notePosts, ...zennPosts]

  // 必要に応じて、結合したデータを整形・ソート
  // 例: 公開日時の降順でソート
  aggregatedPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

  return aggregatedPosts
}

export { getAggregatedPosts }
