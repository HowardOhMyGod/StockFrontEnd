<template lang="pug">
  .chooseStra
    h4 請選擇策略↓
    .selectBlock
      .basic.opt(@click="toStraIntro(2)") 基本面分析
      .tech.opt(@click="toStraIntro(1)") 技術面分析
</template>

<script>
export default {
  methods: {
    toStraIntro(type){
      if(type == 1){
        this.$router.push({path: '/strategyIntro/techIntro'})
      } else if (type == 2){
        this.$router.push({path: '/strategyIntro/basicIntro'})
      }
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
    font-family: 微軟正黑體
  .chooseStra
    border: solid 1px $colorWhite
    padding: 0px 5px
    border-radius: 3px
    color: white
    h4
      font-size: 18px
      text-align: center
      padding: 5px 5px
      border-bottom: solid 2px $colorYellow
    .selectBlock
      .opt
        text-align: center
        margin-bottom: 10px
        padding: 5px 10px
        font-weight: 800
        font-size: 18px
        cursor: pointer
        background-color: rgba(#7a7a7a, 0.5)
        color: white

</style>
