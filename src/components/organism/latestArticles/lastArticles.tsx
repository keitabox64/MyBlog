import React from 'react'
import styled from 'styled-components'
import { theme } from '@/themes'
import { RssPost } from '@/utils/rss'

type lastArticleProps = {
  posts: RssPost[]
}

const LastArticlesSection = styled.div`
  background-color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  width: 320px;
  height: 445px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (${theme.breakpoints.tablet} <= width < ${theme.breakpoints.pc}) {
    width: 660px;
  }
`

const Title = styled.h3`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.mediumLarge}px;
  font-weight: 800;
  margin: 0 24px 24px 24px;
  padding-top: 24px;
`
const LastArticleContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 24px;
`
const StyledA = styled.a`
  display: flex;
  flex-direction: row;
  margin: 0 24px;
  &:hover {
    transform: translateY(-2px);
  }
`
const SquareThumnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`
const ArticleContent = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`
const StyledP = styled.p`
  color: ${theme.colors.gray2};
  font-size: ${theme.fontSizes.extraSmall}px;
  font-weight: 800;
  margin: 5px 0;
`
const StyledH4 = styled.h4`
  margin: 0;
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.small}px;
  font-weight: 400;
`

const LastArticles: React.FC<lastArticleProps> = ({ posts }) => {
  return (
    <LastArticlesSection>
      <Title>最新記事</Title>
      <LastArticleContainer>
        {posts.slice(0, 3).map((post, index) => (
          <li key={index}>
            <StyledA href={post.link} target='_blank' rel='noopener noreferrer'>
              <SquareThumnail src={post.thumbnail} alt={`${post.title} thumbnail`} />
              <ArticleContent>
                <StyledP>{new Date(post.publishedAt).toLocaleDateString()}</StyledP>
                <StyledH4>{post.title}</StyledH4>
              </ArticleContent>
            </StyledA>
          </li>
        ))}
      </LastArticleContainer>
    </LastArticlesSection>
  )
}

export { LastArticles }
