import { initialState as uiInitialState } from '../ui/ui.consts'

export const STATE_KEY = 'root'

export const initialState: RootState = {
  loading: false,
  ui: uiInitialState,
}

const RootActions = {
  CLEAN: `${STATE_KEY}/CLEAN`,
  NAVIGATE: `${STATE_KEY}/NAVIGATE`,
  DEBUG_NAVIGATE: `${STATE_KEY}/DEBUG_NAVIGATE`,
}

export default RootActions