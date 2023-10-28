import 'animate.css';
import { BiStopwatch } from 'react-icons/bi';

export default function LeaderBoard({ data }: { data: string }) {
	const leaderboard = JSON.parse(data);

	return (
		<div className="flex justify-center items-center gap-5 flex-col p-5">
			{leaderboard.length === 0 && (
				<h1>Leaderboard is empty! Claim the throne!</h1>
			)}
			{leaderboard.map((user: any) => (
				<div
					key={user._id}
					className="px-5 w-11/12 md:w-1/3 bg-slate-100 dark:bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-lg rounded-xl animate__animated animate_fadeIn"
				>
					<div className="px-2 py-5">
						<div className="flex w-full justify-between">
							<span className="font-black md:text-3xl text-2xl">
								{user.name}
							</span>
							<span className="md:text-3xl text-2xl">
								{user.today ? '✅' : '❌'}
							</span>
						</div>
						<div className="flex items-center md:text-base text-sm">
							<div className="pr-1">
								<BiStopwatch className="md:h-5 md:w-5 h-4 w-4" />
							</div>
							{user.timeToday
								? new Date(user.timeToday * 1000)
										.toISOString()
										.substring(14, 19)
								: 'N/A'}{' '}
						</div>
						<i>
							<div>
								<span className="font-light md:text-base text-sm">
									Completed: {user.completed}
								</span>
							</div>
						</i>
					</div>
				</div>
			))}
		</div>
	);
}
