import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../model'
import { addStorage, clearStorage } from '../../utilities/localStorage.utility'

export const emptyUserState = {
  id: 0,
  name: '',
  image: '',
  gender: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : emptyUserState,
  reducers: {
    createUser: (_state, action) => {
      addStorage<User>('user', action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const newUser = { ...state, ...action.payload }
      addStorage<User>('user', newUser)
      return newUser
    },
    resetUser: () => {
      clearStorage('user')
      return emptyUserState
    },
  },
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
