<template lang="pug">
  .surveyResult.col-sm-12
    .resultBlock
      h4 評估結果
      .level {{level}}風險承受者
    img.img(:src="show_img")
    .started(@click="toStrategy()") 開始投資
</template>

<script>
export default {
  data(){
    return {
      level: -1,
      show_img: null
    }
  },
  created(){
    let level = this.$route.params.level
    if(level == 'low'){
      this.level = '低'
      this.show_img = 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2Flr.png?alt=media&token=ead6ce74-3289-4525-a610-5e7a4d0e0476'
    } else if (level == 'mid'){
      this.level = '中'
      this.show_img = 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2Fmr.png?alt=media&token=6c28befe-8783-4bcc-8a2b-380bda2001e1'
    } else if (level == 'high') {
      this.level = '高'
      this.show_img = 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2Fhr.png?alt=media&token=727af8eb-a767-4e81-a61a-bcb4c5e94596'
    }
  },
  methods: {
    toStrategy(){
      this.$router.push({path: '/strategy'})
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
    position: relative
  .surveyResult
    border: solid 1px $colorWhite
    padding: 5px 10px
    border-radius: 3px
    color: white
    height: 100%
    .img
      width: 100%
      height: 300px
      border: solid 1px black
      margin-top: 15px
    .started
      font-weight: 700
      padding: 5px 10px
      border: solid 1px $colorYellow
      text-align: center
      margin-top: 20px
      margin-bottom: 10px
      cursor: pointer
      color: $colorYellow
    .resultBlock
      h4
        font-size: 18px
        text-align: center
        padding: 3px 5px
      .level
        font-size: 22px
        text-align: center
        font-weight: 900
        color: $colorYellow
</style>
