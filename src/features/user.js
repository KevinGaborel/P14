import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: []
  },
  reducers: {
    addUser: (state, action) => {
      state.items = [...state.items, 
      { 
        firstName: action.payload.firstName, 
        lastName: action.payload.lastName, 
        dateOfBirth: action.payload.dateOfBirth, 
        startDate: action.payload.startDate,
        street: action.payload.street,
        city: action.payload.city,
        state:  action.payload.state,
        zipCode: action.payload.zipCode,
        department: action.payload.department
      }]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer