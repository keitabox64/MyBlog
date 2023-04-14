import { RssPost, fetchRssPosts } from './rss'

const noteUrl = '/api/note-rss-proxy'
const zennUrl = 'https://zenn.dev/k_tech/feed?include_scraps=1'

const getAggregatedPosts = async (): Promise<RssPost[]> => {
  // 各サービスから記事データを取得
  const notePosts = await fetchRssPosts(noteUrl)
  const zennPosts = await fetchRssPosts(zennUrl)

  // 記事データを結合
  const aggregatedPosts: RssPost[] = [...notePosts, ...zennPosts]

  // 必要に応じて、結合したデータを整形・ソート
  // 例: 公開日時の降順でソート
  aggregatedPosts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  return aggregatedPosts
}

export { getAggregatedPosts }
