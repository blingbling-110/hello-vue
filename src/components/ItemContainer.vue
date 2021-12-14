<template>
  <header class="top-tips">
    <span class="num-tip" v-if="view === 'home'">{{ level }}</span>
    <span class="num-tip" v-if="view === 'item'">题目{{ itemNum }}</span>
  </header>
  <main v-if="view === 'home'">
    <div class="home-logo item-container"></div>
    <router-link to="item" class="start button"></router-link>
  </main>
  <main v-if="view === 'item'">
    <div class="item-background item-container">
      <div class="item-list-container" v-if="itemDetail.length > 0">
        <header class="item-title">{{ itemDetail[itemNum - 1].topicName }}</header>
        <ul>
          <li v-for="(item, index) in itemDetail[itemNum-1].topicAnswer" @click="chosen(index)"
              class="item-list" :key="index">
            <span class="option" :class="{'has-chosen': chosenIndex === index}">{{ chooseType(index) }}</span>
            <span class="option-detail">{{ item.answerName }}</span>
          </li>
        </ul>
      </div>
    </div>
    <span class="next-item button" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
    <span class="submit-item button" v-else @click="submitAnswer"></span>
  </main>
</template>

<script lang="ts">
/* eslint-disable import/no-duplicates */
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'ItemContainer',
  computed: mapState([
    'itemNum', // 第几题
    'level', // 第几周
    'itemDetail' // 题目详情
  ])
})
</script>

<script setup lang="ts">
/* eslint-disable import/first */
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'

// eslint-disable-next-line no-undef
const props = defineProps<{
  view: string
}>()
const router = useRouter()
const {
  commit,
  state
} = useStore()
const chosenIndex = ref<number | null>(null) // 选中答案索引

// 初始化信息
if (props.view === 'home') {
  commit('initializeData')
}

// 选中的答案信息
function chosen (index: number) {
  chosenIndex.value = index
}

// 索引0-3对应答案A-B
function chooseType (index: number) {
  switch (index) {
    case 0:
      return 'A'
    case 1:
      return 'B'
    case 2:
      return 'C'
    case 3:
      return 'D'
  }
}

function addNum (index: number) {
  // 点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
  commit('rememberAnswer', { index })
  if (state.itemNum < state.itemDetail.length) {
    commit('addItemNum', { num: 1 })
  }
}

// 点击下一题
function nextItem () {
  if (chosenIndex.value !== null) {
    // 保存答案, 题目索引加一，跳到下一题
    addNum(chosenIndex.value)
    chosenIndex.value = null
  } else {
    alert('您还没有选择答案哦')
  }
}

// 到达最后一题，交卷，请空定时器，跳转分数页面
function submitAnswer () {
  if (chosenIndex.value !== null) {
    addNum(chosenIndex.value)
    router.push('score')
  } else {
    alert('您还没有选择答案哦')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-tips {
  position: absolute;
  height: 7.35rem;
  width: 3.25rem;
  top: -1.3rem;
  right: 1.6rem;
  background: url(../assets/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
  z-index: 10;

  .num-tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    height: 0.7rem;
    width: 2.5rem;
    font-size: 0.6rem;
    font-family: '黑体', sans-serif;
    font-weight: 600;
    color: #a57c50;
    text-align: center;
  }
}

.item-container {
  height: 11.625rem;
  width: 13.15rem;
  background-repeat: no-repeat;
  position: absolute;
  top: 4.1rem;
  left: 1rem;
}

.home-logo {
  background-image: url(../assets/1-2.png);
  background-size: 13.142rem 100%;
  background-position: right center;
}

.item-background {
  background-image: url(../assets/2-1.png);
  background-size: 100% 100%;
}

.button {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}

.start {
  background-image: url(../assets/1-4.png);
}

.next-item {
  background-image: url(../assets/2-2.png);
}

.submit-item {
  background-image: url(../assets/3-1.png);
}

.item-list-container {
  position: absolute;
  height: 7.0rem;
  width: 8.0rem;
  top: 2.4rem;
  left: 3rem;
  -webkit-font-smoothing: antialiased;
}

.item-title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item-list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;

  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }

  .option {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: 'Arial', sans-serif;
  }

  .has-chosen {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }

  .option-detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
