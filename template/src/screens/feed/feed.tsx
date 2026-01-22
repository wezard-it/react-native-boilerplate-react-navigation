import React from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useQuery } from '@tanstack/react-query'
import Style from './feed.style'

type Props = NativeStackScreenProps<FeedStackParamList, 'Feed'>

// Example: Fetch feed data using TanStack Query
const useFeed = () => {
  return useQuery({
    queryKey: ['feed'],
    queryFn: async () => {
      // Replace with your actual API call
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) throw new Error('Failed to fetch feed')
      return response.json()
    },
  })
}

const FeedScreen = ({ }: Props) => {
  const { data: feed, isLoading, error } = useFeed()

  if (isLoading) {
    return (
      <View style={Style.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={Style.container}>
        <Text style={Style.errorText}>Error loading feed: {error.message}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={Style.container}>
      <View style={Style.body}>
        <Text style={Style.title}>Feed</Text>
        {feed?.slice(0, 10).map((item: any) => (
          <View key={item.id} style={Style.feedItem}>
            <Text style={Style.feedTitle}>{item.title}</Text>
            <Text style={Style.feedBody}>{item.body}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default FeedScreen
