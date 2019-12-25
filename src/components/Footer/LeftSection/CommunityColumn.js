import React from 'react'

import FooterListColumn from './Column'
import {
  github,
  forum,
  slack,
  meetups,
  partners,
  blog,
} from 'src/constants/urls'

const CommunityColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='社区'
    listItems={[
      {
        name: '博客',
        navProps: { to: blog, completed: true },
      },
      {
        name: 'GitHub',
        navProps: { to: github, crossDomain: true },
      },
      {
        name: '论坛',
        navProps: { to: forum, crossDomain: true },
      },
      {
        name: '沙龙',
        navProps: { to: meetups, crossDomain: true },
      },
      {
        name: '合作伙伴',
        navProps: { to: partners, completed: true },
      },
    ]}
  />
)

export default CommunityColumn
