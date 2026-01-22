import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
  safeArea: { flex: 1 },
  pressableContainer: { flex: 1 },
  container: { flex: 1 },
  titleContainer: { paddingHorizontal: 10 },
  title: { fontFamily: 'Avenir', fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontFamily: 'Avenir', fontSize: 16, color: '#666', marginBottom: 24 },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  errorText: { color: '#FF3B30', fontSize: 14, marginTop: 16 },
  logout: { paddingVertical: 20 },
})

export default Style
