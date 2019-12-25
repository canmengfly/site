import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>组件可复用</Heading.h3>
    <P0 mb={[42, 42, 0]}>
    Serverless components 使用 YAML（serverless.yml）组成，
    底层采用可复用的javascript（serverless.js）编写，
    其语法相对简单类似于常见的前端组件的框架（如 React）。

    </P0>
  </Flex>
)

export default CustomPoliciesContent
