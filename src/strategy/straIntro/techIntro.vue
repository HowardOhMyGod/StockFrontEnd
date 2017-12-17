<template lang="pug">
  .techIntro
    h4.name 均線糾結向上突破
    img.img(src="https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2Fsticky.PNG?alt=media&token=4b50f81a-fec0-4504-8212-894e832394d5")
    .des
      .title 概念介紹
      .text 以下用"多頭市場:收盤價>5日均線>10日均線" 舉例說明. 從下圖中可看出，. 台泥(1101)在6/29起，收盤價>5日均線>10日均線，出現多頭市場。 當5日均線突破10均線時，. 那個交點稱為黃金交叉，表示應買進該檔個股。
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
