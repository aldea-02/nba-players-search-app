import { HiX } from 'react-icons/hi'

export default function Modal(props) {
	return (
		<div className={props.on ? ' w-screen h-full bg-black opacity-90 top-0 absolute grid place-items-center' : 'hidden'}>
			<div className='p-5 bg-black border-white border-2 rounded-md text-white relative'>
				<div className='text-4xl text-center mb-2'>{props.abbreviation} </div>
				<div>{props.team} </div>
				<HiX className='cursor-pointer absolute top-0 right-0 m-1' onClick={() => props.modalChangeStateForModal(false)} />
			</div>
		</div>
	)
}
