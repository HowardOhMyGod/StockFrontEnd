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
  *
    // border: solid 1px black
    position: relative
  .techOpt
    height: 300px
    width: 100%
    .started
      text-align: center
      border: solid 1px black
      padding: 3px 5px
      margin-top: 20px
      cursor: pointer
      font-weight: 700
    .title
      font-weight: 700
      font-size: 16px
      text-align: center
      margin-bottom: 10px
    .options
      .option
        padding: 6px 5px
        margin-bottom: 10px
        border: solid 1px black
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
        select
          width: 100%
          padding: 2px 10px
</style>
