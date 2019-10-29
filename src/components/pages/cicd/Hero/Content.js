import React from 'react'
import { Heading } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { InternalLink, ExternalLink } from 'src/fragments'
import { dashboard, docPages } from 'src/constants/urls.js'
import { Button, HeroFrameworkLogo } from 'src/components'

const HeroContent = props => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.55, 0.6, 0.45]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <HeroFrameworkLogo />
    </Flex>
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless CI/CD
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Test and deploy your serverless apps with ease!
    </Text>
    <Flex
      justifyContent={[
        'space-between',
        'space-between',
        'space-between',
        'space-evenly',
        'flex-start',
      ]}
      mt={42}
    >
      <ExternalLink to={dashboard}>
        <Button type='primary' text='Sign up for free'/>
      </ExternalLink>
      <InternalLink to={docPages.cicd} style={{ alignSelf: 'center' }}>
        <Text
          color='#fd5750'
          fontSize='16px'
          fontFamily='SoleilBk'
          lineHeight='24px'
          letterSpacing='0.8px'
          ml={[0, 0, 33]}
        >
          learn more >
        </Text>
      </InternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
