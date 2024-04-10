import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { UserResponseType, UserType } from '../../types/userType'
import { RootState } from '../store'

const initialState = {
	user: undefined as undefined | UserType,
	isError: false,
}

export const fetchSearch = createAsyncThunk(
	'search/fetchSearch',
	async (user: string) => {
		const res = await axios.get<UserResponseType>(
			`https://api.github.com/users/${user}`
		)
		return res
	}
)

const SearchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchSearch.fulfilled, (state, action) => {
			const { data } = action.payload
			if (data) {
				state.user = {
					login: data.login,
					avatar_url: data.avatar_url,
					created_at: data.created_at,
					followers: data.followers,
					public_repos: data.public_repos,
					name: data.name,
					bio: data.bio,
					following: data.following,
					location: data.location,
					twitter_username: data.twitter_username,
				}
				state.isError = false
			}
		})
		builder.addCase(fetchSearch.rejected, state => {
			state.isError = true
		})
	},
})

export const selectSearch = (state: RootState) => state.search
export default SearchSlice.reducer
