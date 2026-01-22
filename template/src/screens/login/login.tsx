import React from 'react'
import { View, Text } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '@wezard/react-native-ylem'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from 'hooks/useAuth'
import Style from './login.style'

type Props = NativeStackScreenProps<LoginStackParamList, 'Login'>

// Example: Login mutation using TanStack Query
const useLogin = () => {
  const { login } = useAuth()
  
  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      // Replace with your actual API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'GET',
      })
      if (!response.ok) throw new Error('Login failed')
      const user = await response.json()
      // In a real app, you would get a token from the API
      return { token: 'mock_token_' + user.id, user }
    },
    onSuccess: async (data) => {
      // Save auth token
      await login(data.token)
    },
  })
}

const LoginScreen = ({ }: Props) => {
  const loginMutation = useLogin()

  const handleLogin = React.useCallback(() => {
    loginMutation.mutate(
      { email: 'user@example.com', password: 'password' },
      {
        onError: (error) => {
          console.error('Login error:', error)
        },
      }
    )
  }, [loginMutation])

  return (
    <View style={Style.container}>
      <View style={Style.body}>
        <Text style={Style.title}>Login Screen</Text>
        <Text style={Style.subtitle}>Example with TanStack Query</Text>
        <Button
          title={loginMutation.isPending ? 'Logging in...' : 'Login'}
          onPress={handleLogin}
          disabled={loginMutation.isPending}
        />
        {loginMutation.isError && (
          <Text style={Style.errorText}>
            Error: {loginMutation.error?.message}
          </Text>
        )}
      </View>
    </View>
  )
}

export default LoginScreen
