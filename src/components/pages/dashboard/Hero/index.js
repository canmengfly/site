import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, pricing } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/dashboard/dashboard-hero.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Dashboard.module.css'

const DashboardHero = props => (
  <HeroWrapper
    customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <img
          src={FrameworkLogo}
          alt={'Serverless Framework'}
          className={styles.frameworkLogo} />
        <div className={styles.productName}>
          dashboard
        </div>
        <div className={styles.productTagline}>
        Serverless 应用统一看板，具有监控，异常告警，部署状态反馈等功能。
        </div>
        <div className={styles.productCTA}>
          <ExternalLink to={dashboard}>
            <Button type='primary' text='敬请期待'/>
          </ExternalLink>
        </div>
        {/* <div className={styles.productEdition}>
          Available now in
          <InternalLink
            className={styles.editionLink}
            to={pricing}>
          Serverless Framework Pro.
          </InternalLink>
        </div> */}
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

export default DashboardHero
