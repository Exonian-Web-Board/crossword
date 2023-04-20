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
				<div className="md:w-1/2 w-full">
					<h5 className="md:text-lg text-base font-semibold">
						About The Exonian Crossword
					</h5>
					<p className="md:text-sm text-xs">
						The Exonian Crossword was launched in 2023 by the 145th
						Exonian Web Board (Catherine Wu '24, Byran Huang '25,
						Eric Li '25, Ugo Barrah '24, Chengyue Zhang '24,
						developed by Byran Huang '25, Eric Li '25). This
						bi-weekly 5 x 5 crossword has a school leaderboard and
						many customization options. The Web Board strives to
						improve this website and we would love to hear your
						feedback:&nbsp;
						<a
							href="mailto:yhuang4@exeter.edu"
							className="text-gray-500 dark:text-neutral-400"
						>
							yhuang4@exeter.edu&nbsp;
						</a>
						and
						<a
							href="mailto:xli5@exeter.edu"
							className="text-gray-500 dark:text-neutral-400"
						>
							&nbsp;xli5@exeter.edu
						</a>
					</p>
				</div>
				<div className="md:w-1/2 flex justify-center"></div>
			</div>
		</>
	);
}
