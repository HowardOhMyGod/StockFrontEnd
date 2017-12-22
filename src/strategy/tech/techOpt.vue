<template lang="pug">
  .techOpt
    .title - 可調整參數 -
    .options
      .option(v-for="variable in variables")
        img.img(:src="variable.src")
        .optInfo
          .des {{variable.title}}
          .des.intro {{variable.des}}
          select(v-model="options[variable.v_name]")
            option(v-for="i in variable.options", :value="i") {{i}}
    .started(@click="toResult()") 開始計算
</template>

<script>
import {breakCheck} from '../../request'
export default {
  data(){
    return {
      options: {
        k_size: 0.07,
        up_size: 0,
        sticky_level: 0.5,
        sticky_days: 10,
        volumn_big: 2,
        volumn_size: 300,
        risk_level: 'Mid'
      },
      variables: [{
        title: '承受風險等級',
        des: '根據您所填的問卷回答',
        options: ['Low', 'Mid', 'High'],
        v_name: 'risk_level'
      },{
        title: '紅K棒大小(%)',
        des: '紅K棒越大代表多方勢力越強',
        src: 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2F%E7%B4%85k%E6%A3%92%E5%A4%A7%E5%B0%8F.jpg?alt=media&token=73d7f7d2-00c5-452b-a46c-8804fbb4c41d',
        options: [0.07 ,0.05 ,0.1],
        v_name: 'k_size'
      },{
        title: '上影線大小(元)',
        des: '上影線越小代表多方勢力越堅定',
        src: 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2F%E4%B8%8A%E5%BD%B1%E7%B7%9A%E5%A4%A7%E5%B0%8F.png?alt=media&token=932cf909-1991-48e4-b452-38b088c57448',
        options: [0,0.5,1,2],
        v_name: 'up_size'
      },{
        title: '均線糾結程度(元)',
        des: '移動平均線之間的距離，距離越小代表整理程度越高',
        src: 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2F%E5%9D%87%E7%B7%9A%E7%B3%BE%E7%B5%90%E7%A8%8B%E5%BA%A6.png?alt=media&token=61e04242-758e-4fe9-b643-7f2236a23b13',
        options: [0.5 ,1 ,2,3],
        v_name: 'sticky_level'
      },{
        title: '均線糾結天數',
        des: '移動平均線糾結的時間長短，時間越長代表整理期間越久',
        src: 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2F%E5%9D%87%E7%B7%9A%E7%B3%BE%E7%B5%90%E5%A4%A9%E6%95%B8.png?alt=media&token=d24dfdfa-1e88-4818-8791-1f21436aa192',
        options: [10, 15],
        v_name: 'sticky_days'
      },{
        title: '爆大量程度(倍數)',
        des: '今日成交量與前五日之比較，倍數越高代表多方勢力越堅定',
        src: 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2F%E7%88%86%E5%A4%A7%E9%87%8F%E7%A8%8B%E5%BA%A6.png?alt=media&token=24958353-d28a-44aa-ab69-7920c52c83c2',
        options: [2, 1, 1.5, 3],
        v_name: 'volumn_big'
      },{
        title: '成交張數',
        des: '成交張數越大流動性風險越小',
        src: 'https://firebasestorage.googleapis.com/v0/b/storesense-1a3d1.appspot.com/o/stock%2F%E6%88%90%E4%BA%A4%E9%87%8F.png?alt=media&token=c4c43d1a-ae6b-4150-892a-2f16146b8b50',
        options: [300, 500, 1000],
        v_name: 'volumn_size'
      }]
    }
  },
  methods: {
    toResult(){
        window.scrollTo(0,0)
        this.$router.push({path: '/tech/result', query: this.options})
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
            // color: $colorLightGray
</style>
