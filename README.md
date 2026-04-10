# samenoko-blog

個人ポートフォリオ兼ブログサイトです。Nuxt 4、Nuxt Content v3、Tailwind CSS v4 を使用して構築されています。

## 特徴

- **Framework:** [Nuxt 4](https://nuxt.com/) (v4.4.2)
- **Content Management:** [Nuxt Content v3](https://content.nuxt.com/) (Markdownベース)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Runtime:** Bun
- **Deployment:** Cloudflare Pages
- **Database:** Cloudflare D1 (コンテンツインデックス用)
- **CMS:** [Pages CMS](https://pages-cms.com/) 連携

## 技術スタック

- **Nuxt 4**: モダンなWebアプリケーション開発フレームワーク。
- **Nuxt Content v3**: Markdown ファイルをデータベース（D1）で管理・クエリ可能。
- **Tailwind CSS v4**: 最新の CSS フレームワーク。
- **Lucide / Material Design Icons**: `@nuxt/icon` を通じて利用。
- **Remark Plugins**: `remark-breaks`, `remark-gfm`, `remark-link-card-plus` による高品質な Markdown レンダリング。

## ローカル開発

### セットアップ

依存関係のインストールには Bun を推奨します。

```bash
bun install
```

### 開発サーバーの起動

```bash
bun run dev
```

### プロダクションビルドとプレビュー

Cloudflare 環境のエミュレーションを含めたプレビューが可能です。

```bash
bun run preview
```

## デプロイ

Cloudflare Pages にデプロイされます。デプロイコマンドは以下の通りです。

```bash
bun run deploy
```

## コンテンツ管理

`content/` ディレクトリ内の Markdown ファイルで管理されています。

- **Blog:** `content/blog/` (記事データ)
- **Pages:** `content/pages/` (固定ページ)

詳細は `GEMINI.md` を参照してください。
