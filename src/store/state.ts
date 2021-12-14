export interface IItemDetail {
  topicName: string,
  topicAnswer: {
    answerName: string,
    isRightAnswer: boolean
  }[]
}

export interface IState {
  level: string,
  itemNum: number,
  itemDetail: IItemDetail[],
  answerIndexes: number[]
}

export default {
  level: '第一周', // 活动周数
  itemNum: 1, // 第几题
  itemDetail: [{
    topicName: '题目一',
    topicAnswer: [{
      answerName: '答案aaaa',
      isRightAnswer: false
    }, {
      answerName: '正确答案',
      isRightAnswer: true
    }, {
      answerName: '答案cccc',
      isRightAnswer: false
    }, {
      answerName: '答案dddd',
      isRightAnswer: false
    }]
  }, {
    topicName: '题目二',
    topicAnswer: [{
      answerName: '答案A',
      isRightAnswer: false
    }, {
      answerName: '答案B',
      isRightAnswer: false
    }, {
      answerName: '正确答案',
      isRightAnswer: true
    }, {
      answerName: '答案D',
      isRightAnswer: false
    }]
  }, {
    topicName: '题目三',
    topicAnswer: [{
      answerName: '测试A',
      isRightAnswer: false
    }, {
      answerName: 'BBBBBB',
      isRightAnswer: false
    }, {
      answerName: 'CCCCCC',
      isRightAnswer: false
    }, {
      answerName: '正确答案',
      isRightAnswer: true
    }]
  }, {
    topicName: '题目四',
    topicAnswer: [{
      answerName: '正确答案',
      isRightAnswer: true
    }, {
      answerName: 'A是错的',
      isRightAnswer: false
    }, {
      answerName: 'D是对的',
      isRightAnswer: false
    }, {
      answerName: 'C说的不对',
      isRightAnswer: false
    }]
  }, {
    topicName: '题目五',
    topicAnswer: [{
      answerName: '错误答案',
      isRightAnswer: false
    }, {
      answerName: '正确答案',
      isRightAnswer: true
    }, {
      answerName: '错误答案',
      isRightAnswer: false
    }, {
      answerName: '错误答案',
      isRightAnswer: false
    }]
  }],
  answerIndexes: [] // 答案索引
} as IState
