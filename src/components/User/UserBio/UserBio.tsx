interface UserBioProps {
	bio: string | undefined
}
export function UserBio({ bio }: UserBioProps) {
	return (
		<div className='max-w-[600px] flex ml-40 mt-6 text-slate-400	text-lg'>
			{bio}
		</div>
	)
}
