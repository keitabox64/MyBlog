import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../themes'
import DecorationButton from '@/components/atmos/decorationButton/decorationButton'
import LinkBar from '@/components/molecules/linkBar/linkBar'
import { Profile } from '@/components/molecules/profile/profile'
import Category from '@/components/organism/category/category'
import { LastArticles } from '@/components/organism/latestArticles/lastArticles'
import { RssPost } from '@/utils/rss'

type SideBarProps = {
  posts: RssPost[]
  onCategoryChange: (source: 'note' | 'zenn' | undefined) => void
}

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media (width < ${theme.breakpoints.pc}) {
    margin: 0 auto;
  }
`
const SpaceDiv = styled.div`
  margin-bottom: 20px;
`

const SideBar: React.FC<SideBarProps> = ({ posts, onCategoryChange }) => {
  const notePosts = posts.filter((post) => post.source === 'note.com')
  const zennPosts = posts.filter((post) => post.source === 'zenn.dev')
  const [currentCategory, setCurrentCategory] = useState<'note' | 'zenn' | undefined>(undefined)
  const handleCategoryChange = (source: 'note' | 'zenn' | undefined) => {
    setCurrentCategory(source)
  }
  return (
    <SideBarContainer>
      <SpaceDiv>
        <Category notePosts={notePosts} zennPosts={zennPosts} onCategoryChange={onCategoryChange} />
      </SpaceDiv>
      <SpaceDiv>
        <LastArticles posts={posts} />
      </SpaceDiv>
      <SpaceDiv>
        <Profile />
      </SpaceDiv>
      <SpaceDiv>
        <DecorationButton />
      </SpaceDiv>
      <SpaceDiv>
        <LinkBar />
      </SpaceDiv>
    </SideBarContainer>
  )
}

export { SideBar }
