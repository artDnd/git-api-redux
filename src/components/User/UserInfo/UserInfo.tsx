interface UserProps {
	avatar_url: string | undefined
	name: string | undefined
	login: string | undefined
	created_at: string | undefined
}

export function UserInfo(props: UserProps) {
	return (
		<div className='flex justify-between'>
			<span className='flex items-center'>
				<div className='flex flex-col'>
					<img
						src={props.avatar_url}
						alt=''
						className='bg-slate-500 w-[120px] h-[120px] rounded-full'
					/>
				</div>
				<span className='ml-20'>
					<div>{props.name}</div>
					<div className='mt-10'>@{props.login}</div>
				</span>
			</span>
			<div>{props.created_at}</div>
		</div>
	)
}
