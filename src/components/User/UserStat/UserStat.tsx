interface UserStatProps {
	public_repos: number
	following: number
	followers: number
}
export function UserStat({
	public_repos,
	followers,
	following,
}: UserStatProps) {
	return (
		<div className='max-w-[600px] h-[100px] px-6 flex justify-between ml-40 mt-10 text-slate-700 bg-slate-200 items-center rounded'>
			<span className='flex flex-col'>
				Repos <span className='font-bold'>{public_repos}</span>
			</span>
			<span className='flex flex-col'>
				Following <span className='font-bold'>{following}</span>
			</span>
			<span className='flex flex-col'>
				Folowers <span className='font-bold'>{followers}</span>
			</span>
		</div>
	)
}
