import * as React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useUsers, useCreatePost, usePosts } from 'hooks/useQueryExample'

/**
 * Example screen demonstrating TanStack Query usage
 * 
 * This component shows:
 * - How to fetch data with useQuery
 * - How to create mutations with useMutation
 * - How to handle loading and error states
 * - How to invalidate queries after mutations
 */
const QueryExampleScreen = () => {
  const { data: users, isLoading: usersLoading, error: usersError } = useUsers()
  const { data: posts, isLoading: postsLoading } = usePosts()
  const createPost = useCreatePost()

  const handleCreatePost = () => {
    createPost.mutate({
      title: 'New Post',
      body: 'This is a new post created with TanStack Query',
      userId: 1,
    })
  }

  if (usersLoading || postsLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  if (usersError) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error loading users: {usersError.message}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>TanStack Query Example</Text>
        <Text style={styles.subtitle}>Users ({users?.length || 0})</Text>
        
        {users?.map((user) => (
          <View key={user.id} style={styles.card}>
            <Text style={styles.cardTitle}>{user.name}</Text>
            <Text style={styles.cardText}>{user.email}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Posts ({posts?.length || 0})</Text>
        
        <TouchableOpacity
          style={[styles.button, createPost.isPending && styles.buttonDisabled]}
          onPress={handleCreatePost}
          disabled={createPost.isPending}
        >
          <Text style={styles.buttonText}>
            {createPost.isPending ? 'Creating...' : 'Create New Post'}
          </Text>
        </TouchableOpacity>

        {createPost.isError && (
          <Text style={styles.errorText}>
            Error: {createPost.error?.message}
          </Text>
        )}

        {createPost.isSuccess && (
          <Text style={styles.successText}>Post created successfully!</Text>
        )}

        {posts?.slice(0, 5).map((post) => (
          <View key={post.id} style={styles.card}>
            <Text style={styles.cardTitle}>{post.title}</Text>
            <Text style={styles.cardText}>{post.body}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 14,
    marginTop: 8,
  },
  successText: {
    color: '#34C759',
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
  },
})

export default QueryExampleScreen
