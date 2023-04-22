# 個人ブログ MME Blog

![OGImage](https://github.com/keitabox64/MyBlog/blob/main/public/images/OGImage.png)

note、zenn の RSS フィードを使った個人ブログです。まだコードが汚いですが、RSS フィードで記事を集約したいという方は Fork してご自由にお使いください。

ブログの RSS の URL を使うことによってさまざまなブログプラットフォームを集約させることができます。note みたいなクロスオリジンの制約を受けない仲介サーバーを立てる必要がありますが、Vercel のような簡単にサーバレス関数が作れるのでそこがわかれば難しくありません。

## サイト

[MME Blog](https://www.mmengineer.blog/)

## Development

```
npm install
npm run dev
npm run build
```

- サイトはコンポーネント設計でできています。`pages`の`index.tsx`では`components`内の`template`で構成されています。AtomicDesign を採用しており、各コンポーネントを`atoms, molcules, organisms, templates`に分かれています。`storybook`も一部使われていますが、サイト完成を優先させたため、すべてのコンポーネントがカタログ化されていません。（今後作っていく予定です）
- RSS フィードのコアは`utils`内にあります。note のサーバレス関数は`pages/api`内にあります。zenn の RSS フィードの URL は環境変数` process.env.NEXT_PUBLIC_ZENN_URL`と`rss.ts`内のコードをいじることで使えるようになります。local 環境でいろいろいじってみてください。

## 更新内容

2023/4/22：　調整、レスポンシブの不具合を修正　
2023/4/16:　 ver1 完成、meta タグ、favicon 等の調整  
2023/4/14 ～ 4/15: RSS フィードで出力、各コンポネントの設計と実装  
2023/4/13 ～ :　ブログ制作再開。RSS フィードで note と Zenn を取り込む仕様に変更  
2029/3/12: ファーストコミット  
2023/2/1 ～ 3/12: storybook を用いてデザインからコンポーネント制作  
2023/1/6 ～ 2/1: ブログデザイン依頼　デザイン制作者[@Vvn2L](https://twitter.com/Vvn2L)

## どういうことをやっているか

- React/ Typescript を用いてブログを構築しています。
- SSG/ISR の構成で快適な閲覧を目指すようにしています。
- ^^Jamstack 構成でヘッドレス CMS に microCMS を用いる予定です。^^
- microCMS を使わず RSS フィードで各ブログプラットフォームから自身の投稿した記事を集約し、表示させる仕様に変えました。

## 苦労していること

- Typescript の型が一致しないことが多く、結構つまずいています。
- RSS フィードで読み込む際、note だと CORS でネットワークエラーになってしまうため、Vercel のサーバーレス関数を用いて読み込んでいます。

## 目標

- 転職活動を平行してやっているので、4 月中を目標にしています。⇒4/16 ver1 完成

## 課題・修正等

- テストコードが書けていない。
- ファイル名の統一化
- `storybook`のカタログ化

## 作者

Keita Watanabe  
Twitter：[@ke_ke_ke_310](https://twitter.com/ke_ke_ke_310)  
ポートフォリオサイト：[https://keita-watanabe.com/](https://keita-watanabe.com/)
