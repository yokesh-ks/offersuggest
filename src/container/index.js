import { View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const Container = (props) => {
  const { colors } = useTheme()

  const { children } = props
  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: '100%',
        height: '100%',
        maxHeight: '100vh',
        minHeight: '100vh',
        alignItems: 'center',
      }}
    >
      <View style={{ maxWidth: 1440, width: '100%', height: '100%' }}>
        {children}
      </View>
    </View>
  )
}

export default Container
