import React from 'react'
import DashBoard from '../screens/home'

export const Stacks = (Stack) => {
  return (
    <Stack.Group>
      <Stack.Screen name='home'>
        {(screenProps) => <DashBoard {...screenProps} />}
      </Stack.Screen>
    </Stack.Group>
  )
}
