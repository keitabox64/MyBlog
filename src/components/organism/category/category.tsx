import React from 'react'
import styled from 'styled-components'
import { RssPost } from '@/utils/rss'

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

const CategoryButton = styled.button`
  // ここにボタンのスタイルを追加
`

type CategoryProps = {
  notePosts: RssPost[]
  zennPosts: RssPost[]
  onCategoryChange: (category: 'note' | 'zenn') => void
}

const Category: React.FC<CategoryProps> = ({ notePosts, zennPosts, onCategoryChange }) => {
  return (
    <CategoryContainer>
      <CategoryButton onClick={() => onCategoryChange('note')}>
        note ({notePosts.length})
      </CategoryButton>
      <CategoryButton onClick={() => onCategoryChange('zenn')}>
        zenn ({zennPosts.length})
      </CategoryButton>
    </CategoryContainer>
  )
}

export default Category
