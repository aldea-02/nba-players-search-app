export default function Player(props) {
	return (
		<li
			className='text-white bg-neutral-900 p-2 m-1 rounded-md cursor-pointer'
			onClick={(e) => {
				props.modalChangeStateForPlayer(true)
				props.teamChangeState(props.teteamFullName)
				props.abbreviationChangeState(props.abb)
			}}
		>
			{props.fname + ' ' + props.lname}
		</li>
	)
}
