import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
  safeArea: { flex: 1 },
  pressableContainer: { flex: 1 },
  container: { flex: 1, paddingBottom: 22 },
  titleContainer: { paddingHorizontal: 10 },
  title: { fontFamily: 'Avenir', fontSize: 28, fontWeight: '700', padding: 16 },
  body: { flex: 1, padding: 16 },
  feedItem: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  feedTitle: { fontFamily: 'Avenir', fontSize: 16, fontWeight: '600', marginBottom: 8 },
  feedBody: { fontFamily: 'Avenir', fontSize: 14, color: '#666' },
  errorText: { color: '#FF3B30', fontSize: 14, padding: 16 },
  logout: { paddingVertical: 20 },
})

export default Style
