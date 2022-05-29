# railway_kokudosuchi
国土数値情報の鉄道をいい感じに加工したい

## スタイリング例（Mapbox Style）
```
  {
    "type":"line",
    "source":"railway",
    "id":"railway-JR",
    "source-layer":"railway","minzoom":11,"maxzoom":18,
    "filter": [
      "==", ["get", "_class"], "JR"
    ],
    "paint":{
      "line-color": "hsl(0, 0%, 0%)",
      "line-width": 4
    },
    "layout":{"line-cap":"round","line-join":"round","visibility":"visible"}
  },  
  {
    "type":"line",
    "source":"railway",
    "id":"railway-JR2",
    "source-layer":"railway","minzoom":11,"maxzoom":18,
    "filter": [
      "==", ["get", "_class"], "JR"
    ],
    "paint":{
      "line-color": "hsl(0, 100%, 100%)",
      "line-width":2,
      "line-dasharray": [4, 4]
    },
    "layout":{"line-cap":"round","line-join":"round","visibility":"visible"}
  }, 

  {
    "type":"line",
    "source":"railway",
    "id":"railway-subway",
    "source-layer":"railway","minzoom":11,"maxzoom":18,
    "filter": [
      "==", ["get", "_class"], "subway"
    ],
    "paint":{
      "line-color": ["get", "_color"],
      "line-width": 4
    },
    "layout":{"line-cap":"round","line-join":"round","visibility":"visible"}
  }, 
  {
    "type":"line",
    "source":"railway",
    "id":"railway-subway2",
    "source-layer":"railway","minzoom":11,"maxzoom":18,
    "filter": [
      "==", ["get", "_class"], "subway"
    ],
    "paint":{
      "line-color": "hsl(0, 0%, 0%)",
      "line-width": 1,
      "line-dasharray": [6, 3]
    },
    "layout":{"line-cap":"butt","line-join":"round","visibility":"visible"}
  }, 

  {
    "type":"line",
    "source":"railway",
    "id":"railway-other",
    "source-layer":"railway","minzoom":11,"maxzoom":18,
    "filter": [
      "==", ["get", "_class"], "other"
    ],
    "paint":{
      "line-color": ["get", "_color"],
      "line-width": 2
    },
    "layout":{"line-cap":"round","line-join":"round","visibility":"visible"}
  }, 
  {
    "type":"line",
    "source":"railway",
    "id":"railway-other2",
    "source-layer":"railway","minzoom":11,"maxzoom":18,
    "filter": [
      "==", ["get", "_class"], "other"
    ],
    "paint":{
      "line-color": ["get", "_color"],
      "line-width": 6,
      "line-dasharray": [0.1, 3]
    },
    "layout":{"line-cap":"butt","line-join":"round","visibility":"visible"}
  }, 
```

## 参考文献
* 国土数値情報（鉄道） https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N02-v2_3.html




