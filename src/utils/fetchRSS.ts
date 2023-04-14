import { RssPost, fetchRssPosts } from './rss'

// const vercelDomain = process.env.NEXT_PUBLIC_VERCEL_URL
// console.log('Vercel Domain:', vercelDomain)
// const noteUrl = `${vercelDomain}/api/note-rss-proxy`
const noteUrl = 'https://zenn.dev/feed'
const zennUrl = 'https://zenn.dev/k_tech/feed?include_scraps=1'

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
