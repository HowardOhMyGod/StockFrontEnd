<template lang="pug">
  .asking
    .question 你是否曾做過風險屬性測驗?
    .answer
      .ansblock
        .yes.btn(@click="answer(1)") 有
        .no.btn(@click="answer(0)") 無
    .levelSelc(v-if="doneBefore")
      h3.title 你的風險承受等級為?
      .high.level(@click="toSurveyResult('high')") 高
      .mid.level(@click="toSurveyResult('mid')") 中
      .low.level(@click="toSurveyResult('low')") 低
</template>

<script>
export default {
  data(){
    return {
      doneBefore: false
    }
  },
  methods: {
    answer(status){
      if(status == '1'){
        this.doneBefore = true
      } else {
        this.doneBefore = false
        this.$router.push({path: '/survey'})
      }
    },
    toSurveyResult(level){
      this.$router.push({path: `/surveyResult/${level}`})
    }
  }
}
</script>

<style lang="sass" scoped>
  $colorYellow: #FFC000
  $colorWhite: rgba(white, 0.7)
  *
    // border: solid 1px black
    position: relative
    font-family: 微軟正黑體
  .asking
    padding: 10px
    border: solid 1px white
    .levelSelc
      h3
        font-weight: 700
        text-align: center
        padding-bottom: 8px
        border-bottom: solid 2px $colorYellow
        font-size: 18px
        color: white
      .level
        text-align: center
        padding: 3px 10px
        border: solid 1px $colorWhite
        font-size: 16px
        margin-bottom: 10px
        cursor: pointer
        color: white

    .question
      padding: 5px 0px
      font-size: 16px
      text-align: center
      margin-bottom: 20px
      font-weight: 700
      border-bottom: solid 2px $colorYellow
      letter-spacing: 1px
      color: white
    .answer
      .ansblock
        display: inline-block
        left: 50%
        transform: translateX(-50%)
        .btn
          font-size: 18px
          display: inline-block
          padding: 5px 20px
          vertical-align: top
          border: solid 1px white
          border-radius: 3px
          font-weight: 700
          color: white
        .yes
          margin-right: 20px
</style>
