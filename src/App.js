import React, { useRef } from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context'
import AppNavigator from './navigation'
import { navigationRef } from './navigation/RootNavigator'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const customDarkTheme = {
  ...DarkTheme.colors,
  colors: {
    ...DarkTheme.colors,
  },
}
const App = () => {
  const routeNameRef = useRef()

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          theme={customDarkTheme}
          ref={navigationRef}
          // eslint-disable-next-line no-return-assign
          onReady={() =>
            (routeNameRef.current =
              navigationRef.current.getCurrentRoute().name)
          }
          onStateChange={async () => {
            const currentRouteName =
              navigationRef.current.getCurrentRoute().name
            routeNameRef.current = currentRouteName
          }}
          linking={{ enabled: true }}>
          <AppNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}

export default App
