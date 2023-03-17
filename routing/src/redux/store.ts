import { configureStore } from '@reduxjs/toolkit'
import { User } from '../model'
import userSliceReducer from './states/user'

export interface AppStore {
  user: User
}

export default configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
  },
})
