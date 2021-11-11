import React, { useState } from 'react';

//need some data
const teamsList = [
	{
		teamId: 1,
		teamName: 'Cowboys',
		teamType: 'football',
		teamRank: 38,
		teamState: 'Texas',
	},
	{
		teamId: 2,
		teamName: 'Bears',
		teamType: 'football',
		teamRank: 2,
		teamState: 'Illinois',
	},
	{
		teamId: 3,
		teamName: 'Vikings',
		teamType: 'football',
		teamRank: 58,
		teamState: 'Minnesota',
	},
	{
		teamId: 4,
		teamName: 'Twins',
		teamType: 'baseball',
		teamRank: 10,
		teamState: 'Minnesota',
	},
	{
		teamId: 5,
		teamName: 'Blackhawks',
		teamType: 'hockey',
		teamRank: 1,
		teamState: 'Illinois',
	},
];

// need a variable to hold our state values
const initialFormValues = {
	// our initial input values
	teamId: '',
	teamName: '',
	teamType: '', // simple dropdown
	teamRank: '',
	teamState: '', // simple dropdown
};

export default function TeamsForm() {
	// need a slice of state for team data
	const [teams, setTeams] = useState([teamsList]);

	//need a slice of state for form data
	const [formValues, setFormValues] = useState(initialFormValues);

	// need a state for when the data changes in the form
	const change = (evt) => {
		const { name, value } = evt.target;
		setFormValues({ ...formValues, [name]: value });
	};

	// need a submit onClick action that takes the new values and puts them into our formValues variable
	const submit = (evt) => {
		evt.preventDefault(); // keeps the form from auto-refreshing through the browser
		const newTeam = {
			teamId: formValues.teamId,
			teamName: formValues.teamName.trim(),
			teamType: formValues.teamType.trim(),
			teamRank: formValues.teamRank, // no need to trim, its a number
			teamState: formValues.teamState, // no need to trim, its a dropdown
		};

		// now put the new form values into the teams dataset
		setTeams([...teams, newTeam]);
		setFormValues(initialFormValues);
	};

	return (
		<main className='container'>
			<h1>Teams Form - Simple</h1>;
			{/* let's map through our current data items and list them */}
			{teams.map((team, idx) => {
				return (
					<div key={idx}>
						{team.teamName} is a {team.teamType} team from{' '}
						{team.teamState}.
					</div>
				);
			})}
			<form onSubmit={submit}>
				<input
					name='teamId'
					type='text'
					value={formValues.teamId}
					onChange={change}
				/>

				<input
					name='teamName'
					type='text'
					value={formValues.teamName}
					onChange={change}
				/>
				<input
					name='teamType'
					type='text'
					value={formValues.teamType}
					onChange={change}
				/>
				<input
					name='teamRank'
					type='text'
					value={formValues.teamRank}
					onChange={change}
				/>
				<input
					name='teamState'
					type='text'
					value={formValues.teamState}
					onChange={change}
				/>
				<button>submit</button>
			</form>
		</main>
	);
}
