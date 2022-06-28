import { useRouter } from 'next/router'

const EventDetail = () => {
	const router = useRouter()

	return (
		<>
			<h1>Event - {router.query.eventId}</h1>
		</>
	)
}

export default EventDetail
