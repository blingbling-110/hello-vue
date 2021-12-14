import { IState } from '@/store/state'

export default {
  // 点击进入下一题
  addItemNum (state: IState, { num }: { num: number }): void {
    state.itemNum += num
  },
  // 记录答案
  rememberAnswer (state: IState, { index }: { index: number }): void {
    state.answerIndexes[state.itemNum - 1] = index
  },
  /*
  初始化信息，
   */
  initializeData (state: IState): void {
    state.itemNum = 1
    state.answerIndexes = []
  }
}
