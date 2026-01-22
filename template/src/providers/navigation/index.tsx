import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { useAuth } from 'hooks/useAuth'
import LoginStack from './stacks/login'
import TabsNavigator from './stacks/tabs'

const NavigationProvider = () => {
  const { isAuthenticated } = useAuth()

  React.useEffect(() => {
    SplashScreen.hide()
  }, [])

  const content = React.useMemo(() => {
    // Show loading state while checking auth
    if (isAuthenticated === null) {
      return null
    }

    if (isAuthenticated) return <TabsNavigator />
    return <LoginStack />
  }, [isAuthenticated])

  return <NavigationContainer>{content}</NavigationContainer>
}

export default NavigationProvider
