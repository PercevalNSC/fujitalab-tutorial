# Flaskで動くマップボックスサンプル

## Dependency
- Flask
    > pip install flask

## Flaskについて
### ディレクトリ構造について
以下の構造を守る必要があります。（少なくとも,templatesの位置だけは固定な気がする）
- server.py（起動スクリプト）
- static/
    - css/
    - img/
    - js/
- templates/

### jsonの扱い
- json中の非ASC2コードが文字化けするのを防ぐ
    > app.config["JSON_AS_ASCII"] = False
- apiとして出力を返す時は以下のようにすると見栄えが良くなる
    > return jsonify( {json data} )

## Mapbox API
### Use
- index.html
    - head
        ```
        <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
        <script src='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'></script>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
        ```
    - body
        ```
        <div id='map'></div>
        ```
            
- style.css
    ```
    #map { 
        position: absolute;
        top: 0; bottom: 0;
        width: 100%;
    }
    ```
- index.js
    ```
    mapboxgl.accessToken = ACCESS_TOKEN;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kwatanabe1998/ckwvzytdk7ixc14o53kanjxs8', // 日本語のマップスタイルにしてます
        center: [139.545, 35.655], // 初期に表示する地図の緯度経度 [経度、緯度]
        zoom: 13, // 初期に表示する地図のズームレベル
    });
    ```