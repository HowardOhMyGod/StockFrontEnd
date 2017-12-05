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
    let score = this.$route.params.score
    if(score < 8){
      this.level = '低'
    } else if (score >=8 && score < 16){
      this.level = '中'
    } else {
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
  *
    // border: solid 1px black
  .surveyResult
    border: solid 1px black
    padding: 5px 10px
    border-radius: 3px
    .img
      width: 100%
      height: 300px
      border: solid 1px black
      margin-top: 15px
    .started
      font-weight: 700
      padding: 5px 10px
      border: solid 1px black
      text-align: center
      margin-top: 20px
      margin-bottom: 10px
      cursor: pointer
    .resultBlock
      h4
        font-size: 18px
        text-align: center
        border: solid 1px black
        padding: 3px 5px
      .level
        font-size: 22px
        text-align: center
        font-weight: 900
</style>
