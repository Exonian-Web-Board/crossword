import { User } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function NavBar({ user }: { user: User | null }) {
	return (
		<>
			{/* <a href="/">
				<img
					alt=""
					src="/logo.jpg"
					width="30"
					height="30"
				/>
				<span>The Exonian Crossword</span>
			</a>
			<button aria-controls="navbar" />
			<div id="navbar" className="justify-content-end">
				<div>
					<a href="/">Crossword</a>
					<a href="/leaderboard">Leaderboard</a>
					{user ? (
						<div>
							<h1>{user ? user.name : "Login"}</h1>
							<a href="/profile">Your Profile</a>
							<button
								onClick={() => {
									signOut();
								}}
							>
								Sign Out
							</button>
						</div>
					) : (
						<button
							onClick={() => {
								signIn();
							}}
						>
							Login
						</button>
					)}
				</div>
			</div> */}
			<div className="bg-black flex items-center justify-between px-2 py-1">
				<div>
					<a href="/" className="  text-white">
						<div className="h-12 flex items-center">
							<img
								src="/logo.jpg"
								alt="Exonian Logo"
								className="h-full"
							/>
							<h1 className="font-extrabold p-2">Crossword</h1>
						</div>
					</a>
				</div>
				<div className="flex items-center">
					<a
						href="/leaderboard"
						className="  text-white font-medium text-lg p-3"
					>
						Leaderboard 🏆
					</a>
					{user ? (
						<>
							<a href="/profile" className=" ">
								<span className="text-white text-lg">
									{user ? user.name : "Login"}
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
							className="text-white border-none"
							onClick={() => {
								signIn();
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
