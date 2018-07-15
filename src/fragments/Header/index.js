import React, { Component } from 'react'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'

import styles from './Header.css'
import commonStyles from './../common.css';

import logo from '../../assets/images/logo.svg'
import mobilemenu from '../../assets/images/icon-mobile-menu.png'
import close from '../../assets/images/icon-close.png'
import frameworkIcon from '../../assets/images/bolt.png'
import gatewayIcon from '../../assets/images/group-6.png'
import dashboardIcon from '../../assets/images/icon-dashboard.png'

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = { navActive: false };
  }

  navClicked = () => {
    this.setState(function(prevState){
      return  {navActive: !prevState.navActive}
    })
  }

  render() {
    return (
      <header className={styles.mainHeaderWrapper}>
        <div className={`${styles.mainHeaderContainer} ${commonStyles.container}`}>
          <div className={`${commonStyles.row} ${commonStyles.justifySpaceBetween}`}>
            <div className={styles.logoWrapper}>
              <Link to='/'>
                <Svg svg={logo} className={styles.logo} />
              </Link>
            </div>
            <div className={`${styles.navBtn} ${this.state.navActive ? styles.active : ''}`} onClick={this.navClicked}>
              <img src={close} className={styles.faTimes} alt="" />
              <img src={mobilemenu} className={styles.faBars} alt="" />
            </div>
            <nav className={`${this.state.navActive ? styles.active : ''}`}>
              <ul className={`${styles.mainNav} ${commonStyles.marg0}`}>
                <li>
                  <a href="">platform</a>
                  <div className={`${styles.platformDrop} ${styles.mainNavDropdown}`}>
                    <ul>
                      <li>
                        <Link to='/framework/'>
                          <img src={frameworkIcon} alt="" />
                          <div className={styles.text}>
                            <span className={styles.top}>serverless</span>
                            <span className={styles.bottom}>framework</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/event-gateway/'>
                          <img src={gatewayIcon} alt="" />
                          <div className={styles.text}>
                            <span className={styles.top}>serverless</span>
                            <span className={styles.bottom}>event gateway</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/dashboard/'>
                          <img src={dashboardIcon} alt="" />
                          <div className={styles.text}>
                            <span className={styles.top}>serverless</span>
                            <span className={styles.bottom}>dashboard</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">developers</a>
                  <div className={`${styles.devDrop} ${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <h3>documentation</h3>
                    <div className={styles.devDropListWrapper}>
                      <div className={styles.devDropList}>
                        <h3>quick starts</h3>
                        <ul>
                          <li><Link to='/framework/docs/providers/aws/guide/quick-start'>nodejs</Link></li>
                          <li><Link to='/framework/docs/providers/aws/guide/quick-start'>python</Link></li>
                          <li><Link to='/framework/docs/providers/aws/guide/quick-start'>java</Link></li>
                          <li><Link to='/framework/docs/providers/aws/guide/quick-start'>go</Link></li>
                        </ul>
                      </div>
                      <div className={styles.devDropList}>
                        <h3>example & guides</h3>
                        <ul>
                          <li><Link to={''}>API's</Link></li>
                          <li><Link to={''}>Cron Jobs</Link></li>
                          <li><Link to={''}>Webhooks</Link></li>
                          <li><Link to={''}>Event Processing</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="">learn</a>
                  <div className={`${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <ul>
                      <li><Link to={''}>why?</Link></li>
                      <li><Link to={''}>use cases</Link></li>
                      <li><Link to={''}>comparisons</Link></li>
                      <li><Link to={''}>case studies</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="">resources</a>
                  <div className={`${styles.resourcesDrop} ${styles.simpleDrop} ${styles.mainNavDropdown}`}>
                    <ul>
                      <li><Link to='/blog'>blog</Link></li>
                      <li><a href='https://forum.serverless.com'>forum</a></li>
                      <li><Link to='/community/meetups'>meetups</Link></li>
                      <li><a href='https://join.slack.com/t/serverless-contrib/shared_invite/enQtMzgxMTkxMzIzNTU3LTY0OGZlYWI2OTI4YTliMWQ0YWNlZGZjMDhkNDAyZGQyZDYwMzYwMTlmNmVmMzMzNmI4YzAyNjg0ZjZkYTdmMzU'>slack</a></li>
                      <li><Link to='/workshops'>workshops</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to='/enterprise'>enterprise</Link></li>
                <li><a href="">sign up</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

