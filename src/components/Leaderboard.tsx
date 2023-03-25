export default function LeaderBoard({ data }: { data: string }) {
	var leaderboard = JSON.parse(data);

	console.log(leaderboard);

	return (
		<table>
			<tbody>
				{leaderboard.map((user: any) => (
					<tr key={user._id}>
						<td>{user.name}</td>
						<td>{user.completed}</td>
						<td>{user.today ? '✔' : '✖'}</td>
						<td>
							{new Date(user.timeToday * 1000)
								.toISOString()
								.substring(14, 19)}{' '}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
