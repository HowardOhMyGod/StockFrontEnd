<template lang="pug">
  .techResult
    .overview
      .title 策略評估指標
      .indexList
        .container
          .row
            .return.index
              .name 報酬率
              .num 10
            .sharpe.index
              .name 夏普
              .num 10
          .row
            .holdingday.index
              .name 持有日期
              .num 10
            .std.index
              .name 標準差
              .num 10
          .row
            .winrate.index
              .name 勝率
              .num 10
    .stockTable
      .title 股票推薦
      .stockBlock
        .stockList(v-for="i in [1,2,3,4]")
          .roww
            .code.s 1105
            .stockName.s 台積電
            .closeProce.s 253.3

    .trend
      .title 該股指標與走勢
      .indexList
        .container
          .row
            .return.index
              .name 報酬率
              .num 10
            .sharpe.index
              .name 夏普
              .num 10
          .row
            .holdingday.index
              .name 持有日期
              .num 10
            .std.index
              .name 標準差
              .num 10
          .row
            .winrate.index
              .name 勝率
              .num 10
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
  .stockList:nth-child(1)
    border-top: solid 1px $colorWhite
  .stockBlock
    border-left: solid 1px $colorWhite
    border-right: solid 1px $colorWhite
  .graph
    .img
      width: 100%
      height: 200px
      border: solid 1px black
      img
        width: 100%
        height: 200px

</style>
