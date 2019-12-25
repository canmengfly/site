import React from 'react'
import { Flex, Text } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>轻松简易的部署过程</Heading.h3>

    <P0 mb={[42, 42, 0]}>
    Serverless components 是为比较高阶的用例（例如网站，博客，支付，存储服务）构建的。
    开发者无需关系底层基础设备，提供更加简单，便捷的serverless部署体验。

    </P0>
  </Flex>
)

export default IndustryStandardContent
