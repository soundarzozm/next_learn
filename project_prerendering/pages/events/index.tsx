import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'
import { useRouter } from 'next/router'

const AllEventsPage = (props: any) => {
	const { events } = props
	const router = useRouter()

	const findEventsHandler = (year: string, month: string) => {
		const fullPath: string = `/events/${year}/${month}`
		router.push(fullPath)
	}

	return (
		<>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	)
}

export async function getStaticProps() {
	const events = await getAllEvents()

	return {
		props: {
			events: events,
		},
		revalidate: 60,
	}
}

export default AllEventsPage
