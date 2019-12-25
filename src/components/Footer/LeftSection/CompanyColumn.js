import React from 'react'

import FooterListColumn from './Column'
import {
  team,
  jobs,
  contact,
  termsOfService,
  privacyPolicy,
} from 'src/constants/urls'

const CompanyColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='公司'
    listItems={[
      {
        name: '关于我们',
        navProps: { to: team, completed: true },
      },
      {
        name: '加入我们',
        navProps: { to: jobs, completed: true },
      },
      {
        name: '联系',
        navProps: { to: contact, crossDomain: true },
      },
      {
        name: '服务条款',
        navProps: { to: termsOfService, crossDomain: true },
      },
      {
        name: '隐私政策',
        navProps: { to: privacyPolicy, crossDomain: true },
      },
    ]}
  />
)

export default CompanyColumn
