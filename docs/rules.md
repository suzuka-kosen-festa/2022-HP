<h1 align="center">
  このリポジトリのルール
</h1>

<p align="center">
  ※ルールと言ってるがそこまで厳しいものは作らない
</p>

&nbsp;

## commit

- 特筆すべきことはなし
  - 強いて言うなら、一目で何を行ったかを分かるようにしてほしい
- 粒度は細かすぎるぐらいで構わない

&nbsp;

## branch

- mainブランチ
  - 分岐元: なし
  - merge先: なし
  - ブランチ名の例: `main`
  - 特徴
    - 本番環境
    - リリースをする
    - 直接コミットは行わない
    - `release`,`hotfix`ブランチからmergeする
- devブランチ
  - 分岐元: `main`
  - merge先: なし
  - ブランチ名の例: `dev`
  - 特徴
    - テスト環境
    - 開発中の最新状態を反映
    - 直接コミットは行わない
    - `feature`,`hotfix`ブランチからmergeする
- featureブランチ
  - 分岐元: `dev`
  - merge先: `dev`
  - ブランチ名の例: `feature/#{issueの番号}`
  - 特徴
    - 機能の開発に用いる
- releaseブランチ
  - 分岐元: `dev`
  - merge先: `main`と`dev`
  - ブランチ名の例: `release/vX.X.X`
  - 特徴
    - リリースの準備
      - バージョンの変更など
    - `main`へmerge後、`dev`へmergeしreleaseブランチは削除する
- hotfixブランチ
  - 分岐元: `main`
  - merge先: `main`と`dev`
  - ブランチ名の例: `hotfix/{issueの番号}`
  - 特徴
    - リリースしたあとに発覚したバグを治すため
    - `main`へmerge後、`dev`へmergeしreleaseブランチは削除する

&nbsp;

## pull request

- 最低でも一人以上のコードレビューをもらってからmergeします
  - リリースの際は3人に増やします
