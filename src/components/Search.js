import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import Modal from './Modal'
import Player from './Player'

export default function Search() {
	const [players, setPlayers] = useState([])
	const [modal, setModal] = useState(false)
	const [team, setTeam] = useState('')
	const [abbreviation, setAbbreviation] = useState('')
	async function fetchPlayers(name) {
		let URL = `https://www.balldontlie.io/api/v1/players/?search=${name}`
		const response = await fetch(URL)
		const players_json = await response.json()
		setPlayers(players_json.data)
	}
	function refreshSearch(e) {
		fetchPlayers(e.target.value ? e.target.value : null)
	}
	return (
		<>
			<div className='flex max-w-2xl px-4 mx-auto pt-12 gap-10 sm:flex-row flex-col min-w-[300px]'>
				<form>
					<div className='flex bg-white w-full border rounded-md p-2'>
						<HiOutlineSearch size={28} />
						<input type='text' name='search' placeholder="Enter player's name" onChange={refreshSearch} className=' outline-none w-40 pl-2' />
					</div>
				</form>
				<ul className={`grid ${players.length !== 0 ? 'grid-cols-3 sm:grid-cols-2' : 'grid-cols-1'}`}>
					{players.length !== 0 ? (
						players.map((player) => (
							<Player
								key={player.id}
								modalChangeStateForPlayer={setModal}
								teamChangeState={setTeam}
								abbreviationChangeState={setAbbreviation}
								teamFullName={player.team.full_name}
								abb={player.team.abbreviation}
								fname={player.first_name}
								lname={player.last_name}
							/>
						))
					) : (
						<div className='text-white bg-red-900 p-2 m-1 rounded-md h-10'>There are no matching players !</div>
					)}
				</ul>
			</div>
			<Modal on={modal} team={team} abbreviation={abbreviation} modalChangeStateForModal={setModal} />
		</>
	)
}
