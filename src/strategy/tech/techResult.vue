<template lang="pug">
  .techResult
    .loading(v-if="isnotLoad")
      h4 計算中
    .overview(:class="{load: isnotLoad}")
      .title 策略評估指標
      .indexList
        .container
          .row
            .return.index
              .name 平均報酬率
              .num {{round(index.avg_rate, 2)}}
            .sharpe.index
              .name 勝率
              .num {{round(index.win_rate, 2)}}
          .row
            .holdingday.index
              .name 最大正報酬
              .num {{round(index.max_pos_rate, 2)}}
            .std.index
              .name 最小負報酬
              .num {{round(index.min_na_rate, 2)}}
          .row
            .winrate.index
              .name 平均持有天數
              .num {{round(index.avg_hold_days, 2)}}
    .stockTable(:class="{load: isnotLoad}")
      .title 股票推薦
      .stockBlock
        .head
          .column 股票代碼
          .column 公司名稱
          .column 今日收盤價
          .column 日期
        .stockList(v-for="stock in passCompany")
          .roww
            .code.s {{stock.code}}
            .stockName.s {{stock.name}}
            .closeProce.s {{stock.today_close_price}}
            .date.s {{stock.date}}
      .graph
        .title 走勢圖
        .img
          img(src="http://pic.pimg.tw/check3188/4adc89cbdc8df.jpg")
</template>

<script>
import {breakCheck} from '../../request'

export default {
  data(){
    return {
      passCompany: [],
      index: {}
    }
  },
  methods: {
    round(num, pos) {
      var size = Math.pow(10, pos);
      return Math.round(num * size) / size
    }
  },
  computed: {
    isnotLoad(){
      return Object.keys(this.index).length === 0
    }
  },
  created(){
    breakCheck(this, this.$route.query).then((res) => {
      this.passCompany = res.pass_company
      this.index = res.his_index
    }).catch((e) => {
      alert(e)
    })
  }
}
</script>

<style lang="sass" scoped>
  $colorGray: #2B2B2B
  $colorLightGray: #3B3838
  $colorYellow: #FFC000
  $colorWhite: rgba(white, 0.7)

  @keyframes loading
    0%
      top: 40%
    25%
      top: 45%
    50%
      top: 48%
      background-color: rgba($colorLightGray, 0.8)
    75%
      top: 45%
    100%
      top: 40%
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
  .loading
    position: fixed
    z-index: 1000
    width: 80px
    height: 80px
    left: 50%
    top: 40%
    transform: translate(-50%, -50%)
    background-color: $colorGray
    padding: 10px
    border-radius: 50%
    border: solid 2px $colorYellow
    transition: 0.5s
    animation: loading 3s infinite
    h4
      top: 30%
      transform: translateY(-50%)
      font-size: 15px
      text-align: center
      font-weight: 800
      letter-spacing: 1px
  .overview
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
    padding: 10px 0px
  .overview, .stockTable
    margin-bottom: 15px
  .overview.load, .stockTable.load
    filter: blur(4px)
  .stockList
    border-bottom: solid 1px $colorWhite
    padding: 10px 0px
    .roww
      display: flex
      .s
        flex: 1
        text-align: center
  .stockList:nth-child(1)
    border-top: solid 1px $colorWhite
  .stockList:nth-child(odd)
    background-color: rgba($colorLightGray, 0.6)
  .stockBlock
    border-left: solid 1px $colorWhite
    border-right: solid 1px $colorWhite
    background-color: $colorGray
    .head
      display: flex
      border-top: solid 1px $colorWhite
      border-bottom: solid 1px $colorWhite
      padding: 10px 3px
      background-color: $colorLightGray
      .column
        flex: 1
        text-align: center
        letter-spacing: 2px
  .graph
    margin-top: 20px
    .img
      width: 100%
      height: 200px
      border: solid 1px black
      img
        width: 100%
        height: 200px

</style>
