<template lang="pug">
  .basicResult
    .loading(v-if="isnotLoad")
      h4 計算中
    .type_select(:class="{load: isnotLoad}")
      .title 產業篩選
      select(v-model="select_type")
        option(value="all", selected="selected") 全部
        option(v-for="type in industry_types", :value="type") {{type}}
    .stockTable(:class="{load: isnotLoad}", v-for="type in type_to_show")
      .title {{type}}
      .stockBlock
        .head
          .column 股票代碼
          .column 公司名稱
          .column 今日收盤價
          .column 日期
        .stockList(v-for="stock in stocks[type]")
          .roww
            .code.s {{stock.code}}
            .stockName.s {{stock.name}}
            .closeProce.s {{stock.close}}
            .date.s {{stock.date}}
</template>

<script>
import {basicResult} from '../../request'

export default {
  data(){
    return {
      stocks: {},
      select_type: "all",
      industry_types: []
    }
  },
  computed: {
    isnotLoad(){
      return Object.keys(this.stocks).length === 0
    },
    type_to_show(){
      if (this.select_type == 'all'){
        return this.industry_types
      } else {
        return [this.select_type]
      }
    }
  },
  created(){
    basicResult(this, {"risk_level": "Mid"}).then((res) => {
      this.stocks = res
      this.industry_types = Object.keys(res)
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
  .basicResult
    color: white
    height: 100%
  .type_select
    margin-bottom: 20px
    select
      width: 100%
      padding: 2px 10px
      background: rgba(#7a7a7a, 0.5)
      option
        background-color: $colorLightGray
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
  .stockTable
    margin-bottom: 15px
  .stockTable.load, .type_select.load
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

</style>
