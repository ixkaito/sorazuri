# sorazuri data readme

## 使用しているデータの種類について
- 気象庁過去の観測データ
- あべのハルカスにおける気象観測データ（2016年度分）
- netatmo観測データ

## 気象庁の過去の観測データ
- 過去の気象データCSVダウンロードから以下の要素を使用する（観測点：大阪）
- 元のデータをjsonに変換
http://www.data.jma.go.jp/obd/stats/etrn/index.php
  - 気温
  - 風速
  - 湿度
  - 気圧

- データ項目説明
  - date：日付
  - dayLength：日照時間（時間）
  - temperature：気温（℃）
  - snowfall：降雪（cm）
  - rainfall：降水量（mm）
  - snowCover：積雪（cm）
  - windSpeed：風速（m/s）
  - windDirection：風向
  - solarRadiation：日射量（MJ/u）
  - weather：天気
  - cloudCover：雲量（10分比）
  - localPressure：現地気圧（hPa）
  - meanSeaLevelPressure：海面更正気圧（hPa）
  - relativeHumidity：湿度（%）

## あべのハルカスにおける気象観測データ（2016年度分）
- Asia Open Data Hackathon 大阪会場のみのデータ（ハルカス15階と37階で観測）
- 元のデータをjsonに変換
  - 気温
  - 湿度

- データ項目説明
  - date：日付
  - temperature15：15階気温
  - temperature37：37階気温
  - temperatureAve：気温平均
  - relativeHumidity15：15階湿度
  - relativeHumidity37：37階湿度
  - relativeHumidityAve：湿度平均

## netatmo観測データ
- netatmoによるセンサー観測のリアルタイムデータ
https://dev.netatmo.com/en-US/resources/technical/reference/weatherstation
