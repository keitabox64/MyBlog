import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../themes'
import { Pagination } from '../../molecules/pagiNation/pagiNation'
import { ArticleCard } from '../../organism/ArticleCard/ArticleCard'

import { RssPost } from '@/utils/rss'

type ArticleListProps = {
  posts: RssPost[]
}

const ArticleListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  row-gap: 32px;
`

const getPaginatedPosts = (
  posts: RssPost[],
  currentPage: number,
  postsPerPage: number,
): RssPost[] => {
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  return posts.slice(startIndex, endIndex)
}

const ArticleList: React.FC<ArticleListProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(posts.length / 6)
  const postsToDisplay = getPaginatedPosts(posts, currentPage, 6)
  return (
    <>
      <ArticleListContainer>
        {postsToDisplay.map((post, index) => (
          <ArticleCard key={index} post={post} />
        ))}
      </ArticleListContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </>
  )
}

export { ArticleList }
