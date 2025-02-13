import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNewest'
import Prefooter from 'src/components/pages/learn/Prefooter'
import Hero from 'src/components/pages/learn/comparisons/Hero'
import ComparisonScrollList from 'src/components/pages/learn/comparisons/comparisonScrollList'
import { Helmet } from 'src/fragments'

const Comparisons = ({ location }) => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Helmet
      title='Comparisons: Serverless vs. other tools'
      description='When should you use Serverless over other tools?'
      location={location}
    />
    <Hero />
    <ComparisonScrollList />
  </DefaultLayout>
)

export default Comparisons
