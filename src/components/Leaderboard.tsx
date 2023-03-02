import { Table } from 'react-bootstrap';

export default function LeaderBoard({ data }: { data: string }) {
	const leaderboard = JSON.parse(data);

	return (
		<>
			<h1>Leaderboard</h1>
			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Total Puzzles Completed</th>
						<th>Did Today's Crossword?</th>
						<th>Time Today</th>
					</tr>
				</thead>
				<tbody>
					{leaderboard.map((user: any) => (
						<tr key={user._id}>
							<td>{user.name}</td>
							<td>{user.completed}</td>
							<td>{user.today ? '✔' : '✖'}</td>
							<td>
								{new Date(user.timeToday * 1000).toISOString().substring(14, 19)}{' '}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
}
