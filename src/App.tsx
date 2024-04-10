import { useSelector } from 'react-redux'
import './App.css'
import { Error } from './components/Error/Error.tsx'
import { Header } from './components/Header/Header.tsx'
import { Search } from './components/Search/Search.jsx'
import { User } from './components/User/User.tsx'
import { defaultUser } from './mock/index.ts'
import { selectSearch } from './store/slices/searchSlice.ts'

function App() {
	const { user, isError } = useSelector(selectSearch)

	const userElement = user.map(elUser => (
		<User user={elUser} key={elUser.login} />
	))
	function renderContent() {
		if (isError) return <Error />
		return user.length ? userElement : <User user={defaultUser} />
	}

	return (
		<div className='h-screen'>
			<Header />
			<Search />
			{renderContent()}
		</div>
	)
}

export default App
