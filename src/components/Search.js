import { useState } from 'react'
export default function Search() {
	const [players, setPlayers] = useState([])

	async function fetchPlayers(name) {
		const response = await fetch(`https://www.balldontlie.io/api/v1/players/?search=${name}`)
		const players_json = await response.json()
		setPlayers(players_json.data)
	}
	function refreshSearch(e) {
		fetchPlayers(e.target.value ? e.target.value : null)
	}
	return (
		<>
			<input className='bg-slate-300' type='text' onChange={refreshSearch} />
			<div className='item-container'>
				{players.map((player) => (
					<div key={player.id}>{player.first_name + ' ' + player.last_name}</div>
				))}
			</div>
		</>
	)
}
