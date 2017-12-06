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
            .stockName.s 何智誠
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
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  *
    // border: solid 1px black
    position: relative
  .title
    text-align: center
    font-size: 18px
    font-weight: 900
    margin-bottom: 10px
  .overview, .trend
    .indexList
      width: 100%
      border: solid 1px black
      padding: 5px 10px
      margin-bottom: 15px
  .index
    display: flex
    flex: 1
    .name
      margin-right: 10px
  .row
    display: flex
    border-bottom: solid 1px black
    padding: 3px 0px
  .overview, .stockTable, .trend
    margin-bottom: 15px
  .stockList
    border-bottom: solid 1px black
    padding: 5px 10px
    .roww
      display: flex
      .s
        flex: 1
  .stockList:nth-child(1)
    border-top: solid 1px black
  .stockBlock
    border-left: solid 1px black
    border-right: solid 1px black
  .graph
    .img
      width: 100%
      height: 200px
      border: solid 1px black

</style>
