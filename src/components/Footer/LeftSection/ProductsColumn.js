import React from 'react'

import FooterListColumn from './Column'
import {
  plugins,
  components,
  dashboardPage,
  monitoring,
  alerts,
  policies,
  cli,
  cicd,
  debugging,
  integrations,
} from 'src/constants/urls'

const ProductsColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='产品'
    listItems={[
      {
        name: 'CLI',
        navProps: { to: cli, completed: true },
      },
      {
        name: 'Plugins',
        navProps: { to: plugins, completed: true },
      },
      {
        name: 'Components',
        navProps: { to: components, completed: true },
      }
    ]}
  />
)

export default ProductsColumn
