import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
  safeArea: { flex: 1 },
  pressableContainer: { flex: 1 },
  container: { flex: 1, alignItems: 'center', paddingBottom: 22 },
  titleContainer: { paddingHorizontal: 10 },
  title: { fontFamily: 'Avenir', fontSize: 28, fontWeight: '700' },
  body: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logout: { paddingVertical: 20 },
})

export default Style
