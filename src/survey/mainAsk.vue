<template lang="pug">
  .asking
    .question 你是否曾做過風險屬性測驗?
    .answer
      .ansblock
        .yes.btn(@click="answer(1)") 有
        .no.btn(@click="answer(0)") 無
</template>

<script>
export default {
  methods: {
    answer(status){
      if(status == '1'){

      } else {
        this.$router.push({path: '/survey'})
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  *
    border: solid 1px black
    position: relative
    font-family: 微軟正黑體
  .asking
    padding: 10px
    border: solid 1px black
    .question
      padding: 5px 0px
      font-size: 16px
      text-align: center
      margin-bottom: 20px
      font-weight: 700
      border-bottom: solid 2px black
      letter-spacing: 1px
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
          border: solid 1px black
          border-radius: 3px
          font-weight: 700
        .yes
          margin-right: 20px
</style>
