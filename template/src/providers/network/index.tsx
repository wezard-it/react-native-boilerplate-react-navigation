import * as React from 'react'
import NetInfo from '@react-native-community/netinfo'
import { useQueryClient } from '@tanstack/react-query'

interface NetworkState {
  isConnected: boolean | null
  type: string | null
}

interface NetworkContextType {
  networkState: NetworkState
  isConnected: boolean
}

const NetworkContext = React.createContext<NetworkContextType>({
  networkState: { isConnected: null, type: null },
  isConnected: true,
})

export const useNetwork = () => React.useContext(NetworkContext)

interface NetworkProviderProps {
  children: React.ReactNode
}

const NetworkProvider = ({ children }: NetworkProviderProps) => {
  const [networkState, setNetworkState] = React.useState<NetworkState>({
    isConnected: null,
    type: null,
  })
  const queryClient = useQueryClient()
  const prevIsConnectedRef = React.useRef<boolean | null>(null)

  React.useEffect(() => {
    // Get initial network state
    NetInfo.fetch().then((state) => {
      const initialState = {
        isConnected: state.isConnected,
        type: state.type,
      }
      setNetworkState(initialState)
      prevIsConnectedRef.current = state.isConnected
    })

    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener((state) => {
      const newState = {
        isConnected: state.isConnected,
        type: state.type,
      }

      const wasOffline = prevIsConnectedRef.current === false
      const isNowOnline = state.isConnected === true

      setNetworkState(newState)
      prevIsConnectedRef.current = state.isConnected

      // If network comes back online, refetch all queries
      if (isNowOnline && wasOffline) {
        queryClient.refetchQueries()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [queryClient])

  const value = React.useMemo(
    () => ({
      networkState,
      isConnected: networkState.isConnected ?? true,
    }),
    [networkState]
  )

  return <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
}

export default NetworkProvider
