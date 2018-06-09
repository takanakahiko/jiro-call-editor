# priparaDB-firebase

## 概要

コーラ

## 作業の流れ

1. 作業
    - リポジトリのトップで`firebase serve`をする(/hosting/distがローカルサーバでたちあがる)
    - /hosting内で`yarn build:watch`をする
    - ソースコードを書く
2. リモートの`master`ブランチにプッシュするとCI経由でFireBaseにデプロイされます
3. `public/`の内容が`https://prickathon.firebaseapp.com/`に反映されているか確認