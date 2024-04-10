import { configureStore } from '@reduxjs/toolkit'
import SearchSlice from './slices/searchSlice'

const store = configureStore({
	reducer: {
		search: SearchSlice,
	},
})
export type RootState = ReturnType<typeof store.getState>
export default store
