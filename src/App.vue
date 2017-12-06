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
  $colorGray: #2B2B2B
  $colorLightGray: #3B3838
  *
    // border: solid 1px black
    position: relative
    font-family: 微軟正黑體
  html, body
    padding: 0px
    margin: 0px
    height: 100%
    width: 100%

  .all
    margin: 0px
    padding: 0px
    position: absolute
    height: 100%
    width: 100%
    background-color: $colorLightGray
  .content
    padding: 0px 5px
    top: 3%
    margin-top: 20px
    background-color: $colorLightGray

  .bar
    height: 40px
    .topbar
      background-color: $colorGray
      font-size: 18px
      letter-spacing: 2px
      box-shadow: 0px 0px 10px rgba(black, 0.3)
      padding: 10px 0px
      text-align: center
      font-weight: 700
      position: fixed
      width: 100%
      box-sizing: border-box
      z-index: 1000
      color: white
</style>
