import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQueryClient } from '@tanstack/react-query'

const AUTH_STORAGE_KEY = 'auth_token'

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const queryClient = useQueryClient()

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem(AUTH_STORAGE_KEY)
      setIsAuthenticated(!!token)
    } catch (error) {
      console.error('Error checking auth status:', error)
      setIsAuthenticated(false)
    }
  }

  const login = async (token: string) => {
    try {
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, token)
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Error saving auth token:', error)
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY)
      setIsAuthenticated(false)
      // Clear all queries on logout
      queryClient.clear()
    } catch (error) {
      console.error('Error removing auth token:', error)
    }
  }

  return {
    isAuthenticated,
    login,
    logout,
    checkAuthStatus,
  }
}
