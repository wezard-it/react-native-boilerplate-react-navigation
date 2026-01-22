import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// Example API types
interface User {
  id: number
  name: string
  email: string
}

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

// Example: Fetch users
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<User[]> => {
      const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      return response.data
    },
  })
}

// Example: Fetch a single user
export const useUser = (userId: number) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async (): Promise<User> => {
      const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`)
      return response.data
    },
    enabled: !!userId, // Only fetch if userId is provided
  })
}

// Example: Fetch posts
export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      return response.data
    },
  })
}

// Example: Create a post (mutation)
export const useCreatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newPost: Omit<Post, 'id'>): Promise<Post> => {
      const response = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', newPost)
      return response.data
    },
    onSuccess: () => {
      // Invalidate and refetch posts after creating a new one
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}

// Example: Update a post (mutation)
export const useUpdatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, ...updatedPost }: Post): Promise<Post> => {
      const response = await axios.put<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost)
      return response.data
    },
    onSuccess: (data) => {
      // Update the cache with the new data
      queryClient.setQueryData(['post', data.id], data)
      // Invalidate the posts list
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}

// Example: Delete a post (mutation)
export const useDeletePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (postId: number): Promise<void> => {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    },
    onSuccess: () => {
      // Invalidate and refetch posts after deletion
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}
