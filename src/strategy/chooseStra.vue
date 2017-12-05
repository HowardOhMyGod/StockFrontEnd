<template lang="pug">
  .chooseStra
    h4 請選擇策略↓
    .selectBlock
      .basic.opt 基本面分析
      .tech.opt 技術面分析
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  *
    border: solid 1px black
    font-family: 微軟正黑體
  .chooseStra
    h4
      font-size: 18px
      text-align: center
      padding: 5px 5px
      border-bottom: solid 2px black
    .selectBlock
      .opt
        text-align: center
        margin-bottom: 10px
        padding: 5px 10px
        font-weight: 800
        font-size: 18px

</style>
