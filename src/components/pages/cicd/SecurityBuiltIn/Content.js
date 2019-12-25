import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const SecurityBuiltInContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>
    安全性
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
    Serverless CI/CD  使用将为每个云端部署生成短期密钥。而且，密钥管理是内置的因此可以安全地存储密钥并在部署时使用。
      <br/>
    </P0>
  </Flex>
)

export default SecurityBuiltInContent
