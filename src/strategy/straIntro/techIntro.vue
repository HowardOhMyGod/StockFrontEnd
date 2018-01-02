<template lang="pug">
  .techIntro
    h4.name 均線糾結向上突破
    img.img(src="https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2Fdetail%2Fsticky.png?alt=media&token=f9fad6a3-6f19-464a-a42b-c74f9814c3b4")
    .des
      .title 概念介紹
      .text 此策略主要找尋個股多空勢力態勢不明，亦即均線糾結過程中，向上突破一根上影線極小的長紅K棒，且同時帶有大成交量的股價型態。範例如上圖所示，詳細參數調整介紹將於下頁說明。
    .started(@click="toTechOpt()") 開始投資!
</template>

<script>
export default {
  methods: {
    toTechOpt(){
      this.$router.push({path: '/tech/options'})
    }
  }
}
</script>

<style lang="sass" scoped>
  $colorGray: #2B2B2B
  $colorLightGray: #3B3838
  $colorYellow: #FFC000
  $colorWhite: rgba(white, 0.7)

  *
    // border: solid 1px black
  .techIntro
    color: white
    height: 100%
    .started
      margin-top: 15px
      text-align: center
      padding: 5px 10px
      font-weight: 700
      letter-spacing: 2px
      border: solid 1px $colorYellow
      margin-bottom: 20px
      cursor: pointer
      color: $colorYellow
    .name
      text-align: center
      font-weight: 700
      padding-bottom: 8px
      border-bottom: solid 2px $colorYellow
    .img
      width: 100%
      height: 300px
    .des
      margin-top: 20px
      .title
        font-weight: 700
        text-align: center
        margin-bottom: 10px
        padding-bottom: 8px
        border-bottom: solid 2px $colorYellow
        font-size: 16px
      .text
        padding: 5px 8px
        border: solid 1px $colorWhite
        border-radius: 3px
        letter-spacing: 1px
        font-size: 16px

</style>
