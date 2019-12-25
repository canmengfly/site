import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, componentsGithub } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/logo-serverless-components-center-vertical-dark.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Components.module.css'

const Hero = props => (
  <HeroWrapper
    customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <img
          src={FrameworkLogo}
          alt={'Serverless Framework'}
          className={styles.frameworkLogo} />
        <div className={styles.productName}>
          组件
        </div>
        <div className={styles.productTagline}>
        Serverless Framework 最新推出功能，数秒内即可构建，并部署 Serverless 应用... ...
        </div>
        <div className={styles.productCTA}>
          <ExternalLink to={componentsGithub}>
            <Button type='primary' text='即刻使用'/>
          </ExternalLink>
        </div>
        <div className={styles.productEdition}>
          <ExternalLink
            className={styles.editionLink}
            to={componentsGithub}>
          Serverless Framework 开源项目
          </ExternalLink>
        </div>
      </div>
      <div className={styles.productHeroColumnRight}>
        <img
          src={HeroImage}
          alt={'Serverless Framework Dashboard'}
          className={styles.productHeroImage} />
      </div>
    </div>
  </HeroWrapper>
)

export default Hero
