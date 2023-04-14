import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0;
  margin: 0;
  font-family: Noto Sans CJK JP, sans-serif;
}
* {
  box-sizing: border-box;
}

a {
  cousor: pointer;
  text-decoration: none;
  transition: .25s;
  color: #333333;
}

ol, ul {
  list-style: none;
}
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key='charset' name='charset' content='utf-8' />
        <meta
          key='viewport'
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5'
        />
        <meta property='og:scale' content='ja_JP' />
        <meta property='og:type' content='website' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
