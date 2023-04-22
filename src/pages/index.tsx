import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styled from 'styled-components'
import { getAggregatedPosts } from '../utils/fetchRSS'
import { ArticleList } from '@/components/template/ArticleList/ArticleList'
import { Footer } from '@/components/template/Footer/Footer'
import { SideBar } from '@/components/template/SideBar/SideBar'
import { theme } from '@/themes'
import { RssPost } from '@/utils/rss'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background: ${theme.colors.primary};
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 195px;
    left: 0;
    width: 100%;
    height: 130px;
    background: repeating-linear-gradient(
      ${theme.colors.primary},
      ${theme.colors.primary} 62px,
      ${theme.colors.gray1} 63px,
      ${theme.colors.gray1} 65px
    );
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 325px;
    left: 0;
    width: 100%;
    height: 90%;
    background: repeating-linear-gradient(
      ${theme.colors.primary},
      ${theme.colors.primary} 30px,
      ${theme.colors.gray1} 30.5px,
      ${theme.colors.gray1} 31px
    );
    z-index: 0;
  }
`
const LogoImage = styled.img`
  width: 400px;
  margin: 60px auto;
  position: relative;
  z-index: 5;
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 300px;
    margin: 75px auto;
  }
`

const BlogSection = styled.section`
  positon: relative;
  z-index: 5;
  display: flex;
  flex-direction: row;
  @media (max-width: ${theme.breakpoints.pc}) {
    flex-direction: column;
  }
`
type IndexProps = {
  posts: RssPost[]
}

const IndexPage: NextPage<IndexProps> = ({ posts }) => {
  const notePosts = posts.filter((post) => post.source === 'note.com')
  const zennPosts = posts.filter((post) => post.source === 'zenn.dev')
  const [currentCategory, setCurrentCategory] = useState<'note' | 'zenn' | undefined>(undefined)
  const handleCategoryChange = (source: 'note' | 'zenn' | undefined) => {
    setCurrentCategory(source)
  }
  return (
    <>
      <Head>
        <title>MMEngineer Blog</title>
        <meta
          name='description'
          content='This is a blog written by a man in his 30s, documenting engineering experiences and life lessons.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content='MME Blog' />
        <meta
          property='og:description'
          content='This is a blog written by a man in his 30s, documenting engineering experiences and life lessons.'
        />
        <meta property='og:image' content='/images/OGImage.png' />
        <meta property='og:url' content='https://mmengineer.blog' />
        <meta property='og:type' content='website' />
      </Head>
      <Main>
        <a
          href='#'
          onClick={(e) => {
            e.preventDefault()
            handleCategoryChange(undefined)
          }}
        >
          <LogoImage src='/images/logo.png' alt='logo' />
        </a>
        <BlogSection>
          {currentCategory === 'note' ? (
            <ArticleList posts={notePosts} />
          ) : currentCategory === 'zenn' ? (
            <ArticleList posts={zennPosts} />
          ) : (
            <ArticleList posts={posts} />
          )}
          <SideBar posts={posts} onCategoryChange={handleCategoryChange} />
        </BlogSection>
      </Main>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAggregatedPosts()

  return { props: { posts }, revalidate: 86400 }
}

export default IndexPage
