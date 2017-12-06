<template lang="pug">
  .surveyResult.col-sm-12
    .resultBlock
      h4 評估結果
      .level {{level}}風險承受者
    .img 我是風險報酬圖
    .started(@click="toStrategy()") 開始投資
</template>

<script>
export default {
  data(){
    return {
      level: -1
    }
  },
  created(){
    let level = this.$route.params.level
    if(level == 'low'){
      this.level = '低'
    } else if (level == 'mid'){
      this.level = '中'
    } else if (level == 'high') {
      this.level = '高'
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
  .surveyResult
    border: solid 1px $colorWhite
    padding: 5px 10px
    border-radius: 3px
    color: white
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
