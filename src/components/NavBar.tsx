import { User } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar({ user }: { user: User | null }) {
	const [mounted, setMounted] = useState(false);
	const { theme, systemTheme, setTheme } = useTheme();

	useEffect(() => {
	  setMounted(true);
	}, []);

	if (!mounted) {
	  return null;
	}
	return (
		<>
			<div className="bg-midnight flex items-center justify-between px-4 py-1">
				<div className="flex items-end">
					<div className="flex items-center">
						<a href="/" className="  text-white">
							<div className="h-12 flex items-center">
								<img
									src="/logo.png"
									alt="Exonian Logo"
									className="h-full"
								/>
								<span className="font-bold text-4xl pr-2">
									Crossword
								</span>
							</div>
						</a>
						<a
							href="/leaderboard"
							className="text-white px-2 font-medium text-lg py-1"
						>
							Leaderboard
						</a>
						<button
							className="text-white px-2 font-medium text-lg py-1"
							onClick={() => {
								setTheme(theme === 'light' ? 'dark' : 'light');
							}}
						>
							Change Theme
						</button>
						<Link
							href="/#footer"
							className="text-white px-2 font-medium text-lg py-1"
						>
							About
						</Link>
						<div className="flex">
							<button
								className="group relative h-6 w-12 rounded-full border-2 border-white bg-white transition-all duration-300 ease-out dark:bg-neutral-600"
								onClick={() =>
									setTheme(theme === 'light' ? 'dark' : 'light')
								}
							>
								<div className="absolute top-0 left-0 h-full w-1/2 origin-left p-0.5 transition-all duration-300 ease-out group-active:scale-x-[1.3] dark:left-1/2 dark:origin-right">
									<div className="flex h-full w-full flex-row items-center justify-center rounded-full bg-neutral-600/30 text-black duration-300 dark:bg-neutral-800/40 dark:text-white">
										{
											{
												dark: (
													<HiMoon className="text-lg group-active:scale-x-[0.769]" />
												),
												light: (
													<HiSun className="text-xl text-neutral-600 group-active:scale-x-[0.769]" />
												),
											}[
												(theme === 'system'
													? systemTheme
													: theme) ?? 'light'
											]
										}
									</div>
								</div>
							</button>
						</div>
					</div>
				</div>
				<div className="flex items-center">
					{user ? (
						<>
							<a href="/profile" className=" ">
								<span className="text-white text-lg">
									{user ? user.name : 'Login'}
								</span>
							</a>
							<button className="px-3">
								<FiLogOut
									className="text-white"
									onClick={() => {
										signOut();
									}}
								></FiLogOut>
							</button>
						</>
					) : (
						<button
							className="text-white font-medium border-none"
							onClick={() => {
								signIn('azure-ad');
							}}
						>
							Login
						</button>
					)}
				</div>
			</div>
		</>
	);
}
