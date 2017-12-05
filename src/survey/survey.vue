<template lang="pug">
  .surveyList
    .questionBlock.col-sm-12.col-md-6(v-for="(que, idx) in questionList")
      .question {{que.title}}
      .answers
        .ans(v-for="(opt, idx2) in que.options",
        @click="clickOpt(idx, idx2)",
        :class="{isClick: isClick(que, idx2)}") {{opt}}
    .sumit.warn(v-if="ansLack != -1") 請回答"{{questionList[ansLack].title}}"
    .sumit(@click="sumitAns()") 提交回答 {{totalScore}}
</template>

<script>
export default {
  data(){
    return {
      totalScore: 0,
      ansLack: -1,
      questionList: [{
        title: '您的年齡?',
        options: ['65↑', '55~65', '35~55', '35↓'],
        nowSelect: -1
      },{
        title: '年均收入?',
        options: ['五萬↓', '5~20', '20~50', '50萬↑'],
        nowSelect: -1
      },{
        title: '你有多少年投資經驗?',
        options: ['沒有經驗', '小於2年經驗', '2~5年', '五年以上'],
        nowSelect: -1
      },{
        title: '您的投資目的?',
        options: ['教育養老', '資產保值', '資產穩健成長', '資產快速成長'],
        nowSelect: -1
      },{
        title: '以下何種產品您有較高的興趣?',
        options: ['最佳回報5%; 最差回報1%', '最佳回報10%; 最差回報0%',
        '最佳回報15%; 最差回報-5%', '最佳回報20%; 最差回報-10%'],
        nowSelect: -1
      },{
        title: '您的投資態度是?',
        options: ['厭惡風險', '保守投資', '尋求較高收益與成長', '希望賺取高報酬'],
        nowSelect: -1
      },{
        title: '您可接受的最常投資期限?',
        options: ['小於6個月', '6-12月', '12-24月', '24個月以上'],
        nowSelect: -1
      },{
        title: '若發生虧損所能容忍的最大幅度?',
        options: ['5%以下', '10%以下', '20%以下', '30%以下'],
        nowSelect: -1
      }]
    }
  },
  methods: {
    clickOpt(idx, idx2){
      this.questionList[idx].nowSelect = idx2
    },
    isClick(que, idx2){
      if(idx2 == que.nowSelect){
        return true
      } else {
        return false
      }
    },
    sumitAns(){
      let isClear = false
      this.totalScore = 0

      for(let i = 0; i < this.questionList.length; i++){
        let thisQue = this.questionList[i]
        let nowSelect = thisQue.nowSelect

        if(nowSelect != -1){
          this.totalScore += nowSelect
        } else {
          this.ansLack = i;
          isClear = true
          break
        }
      }

      if(!isClear){
        this.ansLack = -1
        this.$router.push({path: `/surveyResult/${this.totalScore}`})
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  *
    // border: solid 1px black
    position: relative
  .surveyList
    .sumit
      font-size: 18px
      font-weight: 700
      border: solid 1px black
      text-align: center
      padding: 3px 5px
      margin-bottom: 15px
    .questionBlock
      margin-bottom: 15px
      border: solid 1px black
      padding: 10px 10px
      border-radius: 3px
      .question
        font-size: 16px
        font-weight: 700
      .answers
        margin-top: 10px
        .ans
          font-size: 13px
          margin-bottom: 5px
          padding: 3px 10px
          border: solid 1px black
          letter-spacing: 1px
          cursor: pointer
        .ans.isClick
          background: yellow
</style>
