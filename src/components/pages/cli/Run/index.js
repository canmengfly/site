import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import styles from '../CLI.module.css'

const NoMoreCloudWatch = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <video muted className={styles.cliVideo} autoPlay loop>
      <source
        src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/cli/CLI04.mp4'
        type='video/mp4'
      />
    </video>
  </Flex>
)

export default NoMoreCloudWatch
