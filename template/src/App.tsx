import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import NavigationProvider from 'providers/navigation'
import NetworkProvider from 'providers/network'
import QueryProvider from 'providers/query'

const App = () => {
  return (
    <SafeAreaProvider>
      <QueryProvider>
        <NetworkProvider>
          <NavigationProvider />
        </NetworkProvider>
      </QueryProvider>
    </SafeAreaProvider>
  )
}

export default App
