import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '@wezard/react-native-ylem'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from 'hooks/useAuth'
import Style from './profile.style'

type Props = NativeStackScreenProps<ProfileStackParamList, 'Profile'>

// Example: Fetch user profile
const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      // Replace with your actual API call
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      if (!response.ok) throw new Error('Failed to fetch profile')
      return response.json()
    },
  })
}

const ProfileScreen = ({ }: Props) => {
  const { data: profile, isLoading } = useProfile()
  const { logout } = useAuth()

  const handleLogout = React.useCallback(() => {
    logout()
  }, [logout])

  if (isLoading) {
    return (
      <View style={Style.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View style={Style.container}>
      <View style={Style.body}>
        <Text style={Style.title}>Profile</Text>
        {profile && (
          <>
            <Text style={Style.profileText}>Name: {profile.name}</Text>
            <Text style={Style.profileText}>Email: {profile.email}</Text>
            <Text style={Style.profileText}>Phone: {profile.phone}</Text>
          </>
        )}
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  )
}

export default ProfileScreen
