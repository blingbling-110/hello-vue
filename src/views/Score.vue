<template>
  <div class="score-background">
    <div class="score-container">
      <header class="score-header"><span class="score-num">{{ score }}</span><span class="score">分！</span></header>
      <div class="score-tip">{{ scoreTip }}</div>
    </div>
    <div class="share-button" @click="toggleShare"></div>
    <div class="share-code">
      <header class="share-header">关注葡萄之家，获取答案。</header>
      <img src="../assets/4-4.png" height="212" width="212" class="code-img" alt="code_img">
    </div>
    <div class="share-cover" v-show="showShare" @click="toggleShare">
      <img src="../assets/5-2.png" class="share-img" alt="share_img">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Score'
}
</script>

<script setup lang="ts">
/* eslint-disable import/first */
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { IItemDetail } from '@/store/state'

const SCORE_TIPS = [
  '你说，是不是把知识都还给小学老师了？',
  '还不错，但还需要继续加油哦！',
  '不要嘚瑟还有进步的空间！',
  '智商离爆表只差一步了！',
  '你也太聪明啦，葡萄之家欢迎你！'
]
const store = useStore()
const answerIndexes = computed<number[]>(() => store.state.answerIndexes)
const itemDetail = computed<IItemDetail[]>(() => store.state.itemDetail)
const score = computed<number>(() => answerIndexes.value.reduce(
  (score: number, answerIndex: number, index: number) =>
    itemDetail.value[index].topicAnswer[answerIndex].isRightAnswer ? score + 20 : score
  , 0))
const scoreTip = computed<string>(() => SCORE_TIPS[score.value / 20 - 1] ?? 'Emmmmmmm...')
const showShare = ref(false)

function toggleShare () {
  showShare.value = !showShare.value
}
</script>

<style scoped lang="scss">
.score-background {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../assets/4-1.jpg);
  background-size: 100% 100%;
  background-position: center center;
  padding-top: 1.2rem;
}

.score-container {
  width: 9.7rem;
  height: 9.1rem;
  background: url(../assets/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;

  .score-header {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: 'Microsoft YaHei', sans-serif;

    .score-num {
      font-family: Tahoma, Helvetica, Arial, sans-serif;
      color: #a51d31;
    }

    .score {
      color: #a51d31;
    }
  }

  .score-tip {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}

.share-button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  background: url(../assets/4-3.png) no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}

.share-code {
  width: 5.3rem;
  margin: 1.5rem auto 0;

  .share-header {
    color: #664718;
    font-size: 0.475rem;
    font-family: 'Microsoft YaHei', sans-serif;
    width: 7rem;
    font-weight: 500;
  }

  .code-img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}

.share-cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../assets/5-1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}

.share-img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}

</style>
