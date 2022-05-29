const child_process = require('child_process');
const fs = require('fs');

//コースライン
(() => {
  const tippcanoeOption = [
    'tippecanoe',
    '-o', 'railway.mbtiles',
    './tmp_result.ndjson',
    '--force', 
    '--no-tile-size-limit', 
    '--no-tile-compression',
    '--no-feature-limit',
    '--minimum-zoom=' + 11,
    '--maximum-zoom=' + 11,
    '--base-zoom=' + 11,
    '--simplification=' + 2,
    '-l', 'railway'
  ];

  let command = '';
  tippcanoeOption.forEach( op => {
    command += " " + op;
  });
  console.log(command);
  child_process.execSync(`${command}`);
})();


//統合と出力
(() => {
  const tippOption = [
    'tile-join',
    '-e', './docs/xyz/railway',
    'railway.mbtiles', 
    '--force', 
    '--no-tile-size-limit', 
    '--no-tile-compression'
  ];

  let tipp = '';
  tippOption.forEach( op => {
    tipp = tipp + " " + op;
  });
  console.log(tipp);
  child_process.execSync(`${tipp}`);
})();


