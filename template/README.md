# React Native Boilerplate with React Navigation

## Features:
- **React Native 0.82** with New Architecture (mandatory)
- **React 19.1.1** with latest features
- **TanStack Query** for server state management and data fetching
- **React Navigation** v6 for navigation
- **TypeScript** for type safety
- **i18next** for internationalization
- **date-fns** for date manipulation
- Network state management with offline support
- Authentication flow with AsyncStorage
- Code quality tools: ESLint, Husky, Prettier
- Utils for bottomsheet, camera, device, font, screen navigation

## Project Structure

### src/
- **assets/**: UI assets (fonts, locales, images, etc.)
- **components/**: Reusable UI components
  - **ui/**: Basic building blocks
  - **foo.ts: composed components
  - **hocs/**: Higher-order components
- **hooks/**: Custom React hooks
  - `useAuth`: Authentication state management
  - `useQueryExample`: TanStack Query examples
  - `useTheme`, `useTranslation`, `useForm`, etc.
- **providers/**: Context providers
  - **query/**: TanStack Query configuration
  - **network/**: Network state management
  - **navigation/**: Navigation setup
  - **theme/**: Theme configuration
- **screens/**: Application screens
- **utils/**: Utility functions
  - **helpers/**: General helper functions
  - **validation/**: Form validation utilities
  - **basic-sdk/**: API client configuration
  - **queries/**: atomized collection of tanstack queries
    - **auth/** queries about auth

## TanStack Query Usage

This boilerplate uses **TanStack Query** (formerly React Query) for server state management. Here are common patterns:

### Basic Query Example

```typescript
import { useQuery } from '@tanstack/react-query'

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users')
      return response.json()
    },
  })
}

// In component
const { data, isLoading, error } = useUsers()
```

### Mutation Example

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query'

const useCreatePost = () => {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async (newPost) => {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
      })
      return response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}
```

### Authentication

Use the `useAuth` hook for authentication state:

```typescript
import { useAuth } from 'hooks/useAuth'

const { isAuthenticated, login, logout } = useAuth()
```

### Network State

Use the `useNetwork` hook to check connection status:

```typescript
import { useNetwork } from 'providers/network'

const { isConnected, networkState } = useNetwork()
```

See `src/screens/query-example/query-example.tsx` for a complete example.

## Code Quality

- **ESLint**: Code linting with React Native config
- **Husky**: Git hooks for pre-commit checks
- **Prettier**: Code formatting
- **TypeScript**: Type checking

## Useful Links

- [React Navigation](https://reactnavigation.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Gorhom Bottom Sheet](https://gorhom.github.io/react-native-bottom-sheet/)
- [date-fns](https://date-fns.org/)

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. For iOS, install pods:
   ```bash
   cd ios && pod install && cd ..
   ```

3. Run the app:
   ```bash
   yarn run:ios
   # or
   yarn run:android
   ```

## Available Scripts

- `yarn start`: Start Metro bundler
- `yarn run:ios`: Run on iOS simulator
- `yarn run:android`: Run on Android emulator
- `yarn test`: Run tests
- `yarn lint`: Run ESLint
- `yarn typecheck`: Run TypeScript type checking
- `yarn upgrade:all`: Install dependencies and update native projects

## Committing Guidelines

- `build`: Build system changes
- `ci`: CI/CD changes
- `feat`: New features
- `fix`: Bug fixes
- `refactor`: Code refactoring
- `docs`: Documentation changes
- `test`: Test additions/updates
- `chore`: Tooling changes
- `wip`: Work in progress
- `perf`: Performance improvements
- `revert`: Revert commits
- `style`: Style changes