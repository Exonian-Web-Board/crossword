export default function Footer() {
	return (
		<>
			<div
				id="footer"
				className="flex border-t border-neutral-200 dark:border-neutral-700 transition-colors items-center justify-between px-2 py-4"
			>
				<img
					src="/logo.png"
					alt="Exonian Logo"
					className="h-32 invert dark:invert-0 transition-all"
				/>
				<div className="w-1/2">
					<h5 className="text-lg font-semibold">
						About The Exonian Crossword
					</h5>
					<p className="text-sm">
						The Exonian Crossword was launched in 2023 by the 145th
						Exonian Web Board (developed by Byran Huang '25 and Eric
						Li '25, in alphabetical order). This bi-weekly 5 x 5
						crossword has a school leaderboard and many
						customization options. The Web Board strives to improve
						this website and we would love to hear your feedback:
						<a
							href="mailto:yhuang4@exeter.edu"
							className="text-gray-500 dark:text-neutral-400"
						>
							{' '}
							yhuang4@exeter.edu
						</a>
						and
						<a
							href="mailto:xli5@exeter.edu"
							className="text-gray-500 dark:text-neutral-400"
						>
							{' '}
							xli5@exeter.edu
						</a>
					</p>
				</div>
				<div className="w-1/2 flex justify-center"></div>
			</div>
		</>
	);
}
