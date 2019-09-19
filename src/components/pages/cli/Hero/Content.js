import React from 'react'
import { Heading, Button } from 'src/fragments/DesignSystem'
import { Flex, Text } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/newUrls.js'
import FrameworkLogo from 'src/components/pages/features-common/FrameworkLogo'

const HeroContent = props => (
  <Flex
    flexDirection='column'
    width={[1, 1, 0.6, 0.6, 0.47]}
    mb={[62, 62, 50, 50, 0]}
    mx={['auto', 'auto', 'auto', 'auto', 'inherit']}
  >
    <Flex mb={22} justifyContent={['left', 'left', 'center', 'center', 'left']}>
      <FrameworkLogo />
    </Flex>
    <Heading.h0 align={['left', 'left', 'center', 'center', 'left']}>
      Serverless CLI
    </Heading.h0>
    <Text
      fontSize='24px'
      lineHeight='32px'
      letterSpacing='0'
      fontFamily='SoleilLt'
      mt={[32]}
      align={['left', 'left', 'center', 'center', 'left']}
    >
      Easy YAML + CLI development and deployment to AWS, Azure, Google Cloud &
      more.
    </Text>
    <Flex
      justifyContent={['left', 'left', 'center', 'center', 'flex-start']}
      mt={42}
    >
      <ExternalLink to={dashboard}>
        <Button>download</Button>
      </ExternalLink>
    </Flex>
  </Flex>
)

export default HeroContent
