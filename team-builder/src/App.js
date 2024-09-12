import React, { useState } from 'react';
import './App.css';

const teamsList = [
	{ teamName: 'Cowboys', teamType: 'football', teamRank: 38 },
	{ teamName: 'Bears', teamType: 'football', teamRank: 2 },
	{ teamName: 'Vikings', teamType: 'football', teamRank: 58 },
	{ teamName: 'Twins', teamType: 'baseball', teamRank: 10 },
	{ teamName: 'Blackhawks', teamType: 'hockey', teamRank: 1 },
];

function App() {
	const [formValues, setFormValues] = useState({
		teamName: '',
		teamType: '',
		teamRank: '',
	});

	const [teams, setTeams] = useState(teamsList);
	const submit = (evt) => {
		evt.preventDefault();
		const newTeam = {
			teamName: formValues.teamName.trim(),
			teamType: formValues.teamType.trim(),
			teamRank: formValues.teamRank,
		};
		setTeams(teams.concat(newTeam));
		setFormValues({ teamName: '', teamType: '', teamRank: '' });
	};
	const change = (evt) => {
		console.log(evt.target.name, evt.target.value);
		const { name, value } = evt.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<div className='container'>
			<h1>Teams Builder App</h1>
			{teams.map((team, idx) => (
				<div key={idx}>
					The {team.teamName} are a {team.teamType} team.
				</div>
			))}

			<form onSubmit={submit}>
				<input
					value={formValues.teamName}
					name='teamName'
					type='text'
					onChange={change}
				/>
				<input
					value={formValues.teamType}
					name='teamType'
					type='text'
					onChange={change}
				/>
				<input
					value={formValues.teamRank}
					name='teamRank'
					type='text'
					onChange={change}
				/>
				<input type='submit' value='Add a team!' />
			</form>
		</div>
	);
}

export default App;
