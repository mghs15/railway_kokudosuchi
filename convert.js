const child_process = require('child_process');
const fs = require('fs');

const text = fs.readFileSync("./src/N02-20_GML/N02-20_GML/N02-20_RailroadSection.geojson");
const json = JSON.parse(text);
const features = json.features;

let res = "";

const jrGroup = ["北海道旅客鉄道", "東日本旅客鉄道", "東海旅客鉄道", "西日本旅客鉄道", "四国旅客鉄道", "九州旅客鉄道", "日本貨物鉄道"];
const subwayCity = ["札幌市", "仙台市", "東京都", "横浜市", "名古屋市", "京都市", "大阪市", "神戸市", "福岡市"];
const subwayCamp = ["東京地下鉄", "大阪市高速電気軌道"];
const majorCamp = ["東武鉄道", "西武鉄道", "京成電鉄", "京王電鉄", "東急電鉄", "京浜急行電鉄", "東京地下鉄", "小田急電鉄", 
                   "相模鉄道", "名古屋鉄道", "近畿日本鉄道", "南海電気鉄道", "京阪電気鉄道", "阪神電気鉄道", "阪急電鉄", "西日本鉄道"];

const lineColors = {
  "1号線浅草線": "hsl(0, 100%, 50%)",
  "2号線日比谷線": "hsl(60, 10%, 70%)",
  "3号線銀座線": "hsl(30, 100%, 50%)",
  "4号線丸ノ内線": "hsl(0, 100%, 50%)",
  "4号線丸ノ内線分岐線": "hsl(0, 100%, 50%)",
  "5号線東西線": "hsl(200, 100%, 80%)",
  "6号線三田線": "hsl(220, 100%, 80%)",
  "7号線南北線": "hsl(150, 100%, 50%)",
  "8号線有楽町線": "hsl(45, 100%, 30%)",
  "9号線千代田線": "hsl(120, 100%, 70%)",
  "10号線新宿線": "hsl(90, 100%, 50%)",
  "11号線半蔵門線": "hsl(260, 100%, 80%)",
  "12号線大江戸線": "hsl(310, 100%, 70%)",
  "13号線副都心線": "hsl(45, 100%, 20%)"
}

const campanyColors = {
  "埼玉高速鉄道": "hsl(200, 100%, 50%)",
  "北総鉄道": "hsl(190, 100%, 50%)",
  "首都圏新都市鉄道": "hsl(0, 80%, 40%)",
  "京成電鉄": "hsl(210, 100%, 50%)",
  "東武鉄道": "hsl(0, 100%, 30%)",
  "西武鉄道": "hsl(30, 100%, 50%)",
  "京浜急行電鉄": "hsl(0, 100%, 50%)",
  "京王電鉄": "hsl(240, 40%, 40%)",
  "小田急電鉄": "hsl(210, 100%, 50%)",
  "東急電鉄": "hsl(120, 40%, 40%)",
  "相模鉄道": "hsl(30, 100%, 50%)",
  "名古屋鉄道": "hsl(0, 100%, 50%)",
  "近畿日本鉄道": "hsl(0, 80%, 40%)",
  "南海電気鉄道": "hsl(210, 100%, 50%)",
  "京阪電気鉄道": "hsl(120, 80%, 50%)",
  "阪神電気鉄道": "hsl(30, 100%, 50%)",
  "阪急電鉄": "hsl(0, 50%, 50%)",
  "西日本鉄道": "hsl(0, 100%, 50%)"
}


const rondomColor = () => {
  let r = Math.floor( Math.random() * 256 ).toString(16);
  let g = Math.floor( Math.random() * 256 ).toString(16);
  let b = Math.floor( Math.random() * 256 ).toString(16);
  
  if(r.length < 2) r = "0" + r;
  if(g.length < 2) g = "0" + g;
  if(b.length < 2) b = "0" + b;
  
  const hex = `#${r}${g}${b}`;
  return hex;
}



features.forEach( f => {
  
  const railwayClassCd = f.properties["N02_001"]; 
  const campany = f.properties["N02_004"]; //会社名
  const line = f.properties["N02_003"]; //路線名
  
  let color = "#222222";
  let cl = "other"; // "JR", "subway", "other"
  
  if(jrGroup.includes(campany)){ //JR判別
    cl = "JR";
  }else if(subwayCity.includes(campany) && (railwayClassCd == "12" || railwayClassCd == "16")){
    cl = "subway";
    if(!lineColors[line]) lineColors[line] = rondomColor();
    color = lineColors[line] || rondomColor();
  }else if(subwayCamp.includes(campany) && (railwayClassCd == "12" || railwayClassCd == "21")){
    cl = "subway";
    if(!lineColors[line]) lineColors[line] = rondomColor();
    color = lineColors[line];
  }else{
    //if(!campanyColors[campany]) campanyColors[campany] = rondomColor();
    if(campanyColors[campany]) color = campanyColors[campany];
  }
  
  f.properties["_color"] = color;
  f.properties["_class"] = cl;
  res += JSON.stringify(f) + "\n";
  
});

fs.writeFileSync("./tmp_result.ndjson", res);

