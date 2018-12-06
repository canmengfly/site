import React from 'react'
import {
  Box,
  Column,
  Row,
  Text,
} from 'serverless-design-system'
import FeatureItem from './Item'

import { AppContainerNewest as AppContainer } from 'src/components'
import { Heading } from 'src/fragments/DesignSystem'

const Features = ({ title, description, features, leadingNumber }) => (
  <AppContainer>
    <Column px={[0, 0, 0, 45]}>
      <Box my={[0, 0, 0, 4]}>
        <Heading.h3
          align='center'
          my={1}
        >
          {title}
        </Heading.h3>
        {
          description && (
            <Text.p
              align='center'
              fontFamily='Soleil'
              fontSize={1}
              lineHeight={3}
              color='gray.2'
            >
              { description }
            </Text.p>
          )
        }
      </Box>
      <Row flexWrap='wrap' mt={3}>
        {
          features.map(({ header, img, content, action }, index) => (
            <FeatureItem
              key={header}
              header={header}
              content={content}
              action={action}
              img={img}
              rightAligned={index % 2 === 0}
              leadingNumber={leadingNumber}
            />
          ))
        }
      </Row>
    </Column>
  </AppContainer>
)

Features.defaultProps = {
  title: 'Features',
  description: null,
  leadingNumber: true,
}

export default Features