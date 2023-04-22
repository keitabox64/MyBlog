import React from 'react'
import styled from 'styled-components'
import { theme } from '@/themes'
import { RssPost } from '@/utils/rss'

const CategoryContainer = styled.div`
  background-color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  width: 320px;
  height: 225px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: start;
  flex-direction: column;
  @media (${theme.breakpoints.tablet} <= width < ${theme.breakpoints.pc}) {
    width: 660px;
  }
`

const CategoryTitle = styled.h3`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.mediumLarge}px;
  font-weight: 800;
  margin: 0 24px 24px 24px;
  padding-top: 24px;
`

const CategoryButton = styled.button`
  background: none;
  border: none;
  border-bottom: 2px solid ${theme.colors.gray1};
  color: ${theme.colors.black};
  width: 272px;
  height: 65px;
  padding: 25px 5px;
  margin: 0 auto;
  text-align: left;
  cursor: pointer;
  font-size: ${theme.fontSizes.small}px;
  position: relative;
  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.pc}) {
    width: 612px;
  }
  &::before {
    content: '';
    width: 8px;
    height: 16px;
    background-image: url('/images/arrow.png');
    position: absolute;
    top: 25px;
    right: 5px;
    z-index: 3;
    transform: translateX(0px);
    transition: 0.5s;
  }
  &:hover::before {
    transform: translateX(5px);
    transition: 0.5s;
  }
`
const StyledSpan = styled.span`
  color: ${theme.colors.gray2};
`

type CategoryProps = {
  notePosts: RssPost[]
  zennPosts: RssPost[]
  onCategoryChange: (category: 'note' | 'zenn') => void
}

const Category: React.FC<CategoryProps> = ({ notePosts, zennPosts, onCategoryChange }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>カテゴリー</CategoryTitle>
      <CategoryButton onClick={() => onCategoryChange('note')}>
        note <StyledSpan>({notePosts.length})</StyledSpan>
      </CategoryButton>
      <CategoryButton onClick={() => onCategoryChange('zenn')}>
        zenn <StyledSpan>({zennPosts.length}</StyledSpan>)
      </CategoryButton>
    </CategoryContainer>
  )
}

export default Category
