<template lang="pug">
  .techIntro
    .description
      .title 機器學習方法應用於股價報酬之預測
      .text {{text}}
        span.hightlight 「建設、半導體IC設計、汽車組件、電子零組件連接器、資訊通路零組件代理」
        span 等五大產業之推薦標的。
    .option(v-for="variable in variables")
      img.img(:src="variable.src")
      .optInfo
        .des {{variable.title}}
        .des.intro {{variable.des}}
        select(v-model="options[variable.v_name]")
          option(v-for="i in variable.options", :value="i") {{i}}
    .started(@click="toTechOpt()") 開始篩選!
</template>

<script>
export default {
  data(){
    return {
      options: {
        risk_level: 'Mid'
      },
      text: `此策略主要利用機器
      學習方法中-隨機森林演算法，對股價報酬進行預測，以公司公布的季報財務指標為特徵值，
      而本季季報至下季季報公布期間之股價報酬為欲預測的值，利用上市公司自2010年開始之歷史資料進行模型訓練，
      並依據訓練出的模型推薦相對應的標的。
      此策略目前僅提供`,
      variables: [{
        title: '承受風險等級',
        des: '根據您所填的問卷回答',
        src: 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2Fdetail%2F%E6%89%BF%E5%8F%97%E9%A2%A8%E9%9A%AA%E7%AD%89%E7%B4%9A.png?alt=media&token=6c302ac5-0e63-4030-98a1-af7ed1b4c034',
        options: ['Low', 'Mid', 'High'],
        v_name: 'risk_level'
      }]
    }
  },
  methods: {
    toTechOpt(){
      this.$router.push({path: '/basic/result'})
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
  .hightlight
    color: $colorYellow
  .techIntro
    color: white
    height: 100%
    .option
      padding: 10px 8px
      margin-bottom: 10px
      margin-top: 20px
      border: solid 1px $colorWhite
      img.img
        width: 50px
        height: 50px
        margin-right: 20px
        border: solid 1px rgba(white, 0.3)
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
      .des.intro
        font-size: 12px
        font-weight: 400
        color: rgba(white, 0.8)
      select
        width: 100%
        padding: 2px 10px
        background: rgba(#7a7a7a, 0.5)
        option
          background-color: $colorLightGray
    .started
      margin-top: 15px
      text-align: center
      padding: 5px 10px
      font-weight: 700
      letter-spacing: 2px
      border: solid 1px $colorYellow
      margin-bottom: 20px
      cursor: pointer
      color: $colorYellow
    .description
      margin-top: 20px
      .title
        font-weight: 700
        text-align: center
        margin-bottom: 10px
        padding-bottom: 8px
        border-bottom: solid 2px $colorYellow
        font-size: 16px
      .text
        padding: 5px 8px
        border: solid 1px $colorWhite
        border-radius: 3px
        letter-spacing: 1px
        font-size: 16px
        line-height: 30px

</style>
