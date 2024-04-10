import { UserType } from '../../types/userType'
import { UserBio } from './UserBio/UserBio'
import { UserInfo } from './UserInfo/UserInfo'
import { UserStat } from './UserStat/UserStat'

interface UserProps {
	user: UserType
}

export function User({ user }: UserProps) {
	return (
		<div className='container mx-auto p-10 border shadow-md w-[700px] h-[500px]'>
			<UserInfo
				avatar_url={user.avatar_url}
				created_at={user.created_at}
				login={user.login}
				name={user.name}
			/>
			<UserBio bio={user.bio} />
			<UserStat
				followers={user.followers}
				following={user.following}
				public_repos={user.public_repos}
			/>
			<div className='flex items-center justify-between max-w-[600px] h-[100px] px-6 ml-40'>
				<span>
					{user.location} <p>site</p>
				</span>
				<span>
					{user.twitter_username}
					<p>Work</p>
				</span>
			</div>
		</div>
	)
}
