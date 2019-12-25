import React from 'react'
import PrefooterNewest from 'src/components/PrefooterNewest'
import { P } from 'src/fragments/DesignSystem'

const sentences = [
  <P color='gray.3' mt={[0, 0, 0]} mb={[0, 0, 0]}>
  欢迎去中文社区提问或检索遇到的问题，我们期待更多反馈
  </P>,
]

const actions = [
  {
    name: '中文社区',
    navProps: {
      to: 'https://forum.serverlesscloud.cn/',
      completed: false,
      crossDomain: true,
    },
  },
]

const HaveQuestionsPrefooter = () => (
  <PrefooterNewest
    heading='使用过程中有问题？'
    sentences={sentences}
    actions={actions}
  />
)

export default HaveQuestionsPrefooter
