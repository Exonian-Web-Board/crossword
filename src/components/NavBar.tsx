import { User } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import { FiLogOut } from 'react-icons/fi';
import { HiSun, HiMoon } from 'react-icons/hi';
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

	console.log(systemTheme + ' ' + theme);

	return (
		<>
			<div className="bg-midnight flex items-center justify-between px-4 py-1">
				<div className="flex items-end">
					<Link href="/">
						<div className="h-12 flex items-center">
							<img
								src="/logo.png"
								alt="Exonian Logo"
								className="h-full"
							/>
							<span className="font-bold text-4xl pr-2 text-white">
								Crossword
							</span>
						</div>
					</Link>
					<Link
						href="/leaderboard"
						className="text-white px-2 font-medium text-lg py-1"
					>
						Leaderboard
					</Link>
					<Link
						href="/#footer"
						className="text-white px-2 font-medium text-lg py-1"
					>
						About
					</Link>
					<div className="px-2 py-1">
						<button
							className="text-white font-medium text-lg h-auto"
							onClick={() => {
								setTheme(theme === 'light' ? 'dark' : 'light');
							}}
						>
							{theme == 'dark' ? (
								<HiSun className="animate__animated animate__fadeIn" />
							) : (
								<HiMoon className="animate__animated animate__fadeIn" />
							)}
						</button>
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
