<template lang="pug">
  .all
    .bar
      .topbar.col-sm-12 股票推薦神器
    .content
      router-view
</template>

<script>
  export default {
  }
</script>

<style lang="sass" scoped>
  *
    // border: solid 1px black
    position: relative
    font-family: 微軟正黑體
  html, body
    padding: 0px
    margin: 0px
  .all
    margin: 0px
    padding: 0px
    height: 100%
    width: 100%
  .content
    padding: 0px 5px
    top: 3%
    margin-top: 20px
  .bar
    height: 40px
    .topbar
      background-color: gray
      border: solid 1px black
      font-size: 18px
      padding: 6px 0px
      padding-left: 20px
      text-align: left
      font-weight: 700
      position: fixed
      width: 100%
      box-sizing: border-box
      z-index: 1000
</style>
