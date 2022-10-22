import React, { Suspense } from 'react'
import { HomeStackNavigator } from './StackNavigator'

const AppNavigator = () => {
  return (
    <Suspense>
      <HomeStackNavigator />
    </Suspense>
  )
}

export default AppNavigator
