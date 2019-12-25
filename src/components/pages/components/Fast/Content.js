import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>快速部署</Heading.h3>
    <P0 mb={[42, 42, 0]}>
    Serverless components 的部署速度比传统工具快20倍。
    我们的目标是设计可立即部署并使用的Serverless组件，无需在本地模拟云端环境。
    </P0>
  </Flex>
)

export default CustomPoliciesContent
