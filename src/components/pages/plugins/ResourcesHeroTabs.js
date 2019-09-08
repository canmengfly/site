import React from 'react'

import { HeroTabsNew as HeroTabs } from 'src/fragments'
import {
  examples,
  plugins,
  blog,
  caseStudies,
  courses,
} from 'src/constants/newUrls'

const data = [
  {
    label: 'Plugins',
    value: 'plugins',
    navProps: { to: plugins },
  },
  {
    label: 'Blog',
    value: 'blog',
    navProps: { to: blog },
  },
]

const AllTabs = ({ selected }) => {
  return <HeroTabs data={data} selected={selected} />
}

export default AllTabs
