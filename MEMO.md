### React(typescript)プロジェクト作成

```bash
npx create-react-app {プロジェクトファイル名} --template typescript
```



### 実行コマンド

```sh
$ npm create vite@latest
```


## 使ったライブラリ

- react-router-dom
- storybook
  - 参照(<https://storybook.js.org/docs/react/get-started/install>)


css

共通のcss
モジュールごとのcss(スコープ小さめ)

## ディレクトリ構想

```text
/
|
|- /game
|   |- /find-guys
|   |- /image-quiz
|
|- /about
|- /profile
|- /contact
|- /calendar
|   |- /sub-calendar/:artist-name
|- /news
|   |- /article/:article-number

```