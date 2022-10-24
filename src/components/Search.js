import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import Modal from './Modal'

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
				<div className={players.length !== 0 ? 'grid grid-cols-3 sm:grid-cols-2' : 'grid grid-cols-1'}>
					{players.length !== 0 ? (
						players.map((player) => (
							<div
								className='text-white bg-neutral-900 p-2 m-1 rounded-md cursor-pointer'
								key={player.id}
								onClick={(e) => {
									setModal(true)
									setTeam(player.team.full_name)
									setAbbreviation(player.team.abbreviation)
								}}
							>
								{player.first_name + ' ' + player.last_name}
							</div>
						))
					) : (
						<div className='text-white bg-red-900 p-2 m-1 rounded-md h-10'>There are no matching players !</div>
					)}
				</div>
			</div>
			<Modal on={modal} team={team} abbreviation={abbreviation} modalChangeState={setModal} />
		</>
	)
}
