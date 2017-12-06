<template lang="pug">
  .techOpt
    .title - 可調整參數 -
    .options
      .option(v-for="variable in variables")
        .img
        .optInfo
          .des {{variable.title}}
          select
            option(v-for="i in [1,2,3]") {{i}}
    .started(@click="toResult()") 開始計算
</template>

<script>
export default {
  data(){
    return {
      variables: [{
        title: 'K棒大小',
        options: [1 ,2 ,3]
      },{
        title: '當日高價與收盤價差距',
        options: [1 ,2 ,3]
      },{
        title: '糾結程度',
        options: [1 ,2 ,3]
      },{
        title: '收盤價須高於幾倍的5MA',
        options: [1 ,2 ,3]
      },{
        title: '成交量',
        options: [1 ,2 ,3]
      }]
    }
  },
  methods: {
    toResult(){
      this.$router.push({path: '/tech/result'})
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
  .techOpt
    height: 100%
    width: 100%
    color: white
    .started
      text-align: center
      border: solid 1px $colorYellow
      padding: 6px 5px
      margin-top: 20px
      cursor: pointer
      font-weight: 700
      color: $colorYellow
    .title
      font-weight: 700
      font-size: 16px
      text-align: center
      margin-bottom: 10px
      color: $colorYellow
      letter-spacing: 2px
    .options
      .option
        padding: 10px 8px
        margin-bottom: 10px
        border: solid 1px $colorWhite
        .img
          width: 50px
          height: 50px
          margin-right: 20px
        .img, .optInfo
          display: inline-block
          vertical-align: middle
          border: solid 1px black
        .optInfo
          width: 70%
          border: none
        .des
          margin-bottom: 6px
          font-size: 14px
          font-weight: 700
          letter-spacing: 2px
        select
          width: 100%
          padding: 2px 10px
          background: rgba(#7a7a7a, 0.5)
          option
            background-color: $colorLightGray
            // color: $colorLightGray
</style>
