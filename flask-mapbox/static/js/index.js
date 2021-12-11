// index.js
// author: Keita Watanabe

// initialize map
// accesstokenはできれば自分のものを. とりあえず動かす用にコメントアウトしておいておきます。
mapboxgl.accessToken = 'pk.eyJ1Ijoia3dhdGFuYWJlMTk5OCIsImEiOiJja29tNnQyNnIwZXZxMnVxdHQ1aXllMGRiIn0.ebm4ShyOk1Mp-W1xs0G_Ag';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kwatanabe1998/ckwvzytdk7ixc14o53kanjxs8', // 日本語のマップスタイルにしてます
    center: [139.545, 35.655], // 初期に表示する地図の緯度経度 [経度、緯度]
    zoom: 13, // 初期に表示する地図のズームレベル
});

// Controls
//map.addControl(new mapboxgl.FullscreenControl());
//map.addControl(new mapboxgl.NavigationControl());
//map.addControl(new mapboxgl.ScaleControl({maxWidth: 200, unit: 'metric' }));

map.on('load', function () {
    console.log("map load")
    // add function after rendering map
});