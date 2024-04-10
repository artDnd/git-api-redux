import { UnknownAction } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../../store/slices/searchSlice'
export function Search() {
	const [text, setText] = useState('')
	const dispatch = useDispatch()
	function handleChange(inputValue: string) {
		setText(inputValue)
	}
	function submitSearch() {
		dispatch(fetchSearch(text) as unknown as UnknownAction)
	}

	return (
		<div className='flex justify-center mx-auto my-10 '>
			<input
				placeholder='Enter login for Github user'
				className='w-[300px] border p-1 border-gray-500 rounded-sm'
				value={text}
				onChange={e => handleChange(e.target.value)}
			/>
			<button
				type='submit'
				className='bg-blue-500 ml-3 w-[80px] text-white rounded-sm'
				onClick={submitSearch}
			>
				Search
			</button>
		</div>
	)
}
