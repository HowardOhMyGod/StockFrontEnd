<template lang="pug">
  .techResult
    .overview
      .title 策略評估指標
      .indexList
        .container
          .row
            .return.index
              .name 平均報酬率
              .num 10
            .sharpe.index
              .name 勝率
              .num 10
          .row
            .holdingday.index
              .name 最大正報酬
              .num 10
            .std.index
              .name 最小負報酬
              .num 10
          .row
            .winrate.index
              .name 平均持有天數
              .num 10
    .stockTable
      .title 股票推薦
      .stockBlock
        .head
          .column 股票代碼
          .column 公司名稱
          .column 今日收盤價
        .stockList(v-for="i in [1,2,3,4]")
          .roww
            .code.s 1105
            .stockName.s 台積電
            .closeProce.s 253.3
      .graph
        .title 走勢圖
        .img
          img(src="http://pic.pimg.tw/check3188/4adc89cbdc8df.jpg")
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  $colorGray: #2B2B2B
  $colorLightGray: #3B3838
  $colorYellow: #FFC000
  $colorWhite: rgba(white, 0.7)
  *
    // border: solid 1px black
    position: relative
  .techResult
    color: white
    height: 100%
  .title
    text-align: center
    font-size: 18px
    font-weight: 900
    margin-bottom: 10px
    color: $colorYellow
    letter-spacing: 2px
  .overview, .trend
    .indexList
      width: 100%
      border: solid 1px $colorWhite
      padding: 15px 10px
      margin-bottom: 15px
  .winrate
  .index
    display: flex
    flex: 1
    .name
      margin-right: 10px
    .num
      position: absolute
      right: 15px
  .row
    display: flex
    border-bottom: solid 1px $colorWhite
    padding: 5px 0px
  .overview, .stockTable, .trend
    margin-bottom: 15px
  .stockList
    border-bottom: solid 1px $colorWhite
    padding: 5px 10px
    .roww
      display: flex
      .s
        flex: 1
        text-align: center
  .stockList:nth-child(1)
    border-top: solid 1px $colorWhite
  .stockBlock
    border-left: solid 1px $colorWhite
    border-right: solid 1px $colorWhite
    background-color: $colorGray
    .head
      display: flex
      border-top: solid 1px $colorWhite
      border-bottom: solid 1px $colorWhite
      padding: 2px 3px
      background-color: $colorLightGray
      .column
        flex: 1
        text-align: center
        letter-spacing: 2px
  .graph
    .img
      width: 100%
      height: 200px
      border: solid 1px black
      img
        width: 100%
        height: 200px

</style>
