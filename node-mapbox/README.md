# Node.js駆動のMapboxサンプル

## depedencies
- express
- serve-favicon

## Use
~~~
npm start
~~~
or
~~~
node server.js
~~~

## ディレクトリ構造
- static/

    静的リソースのディレクトリ
    - css

        templateごとのcss
    - js

        templateごとに実行されるjavascript.　js/はES Moduleで書かれてる.
        - Module

            js/のファイルが読み込むモジュール群のjavascript

    - templates

        各html
- package.json
- server.js

    server起動スクリプト．Common JSで記述される．

## static/js/Module/Map.js
Mapbox APIのmapと、操作をまとめたクラスを定義するファイル。
変数mapboxmapをexportしていて、これをimportするとマップが定義される。
mapはid=mapのDOMに対して定義しているので、適宜変更。