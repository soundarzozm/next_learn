import { getAllEvents } from '../../DummyData'
import EventList from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'
import { useRouter } from 'next/router'

const AllEventsPage = () => {
	const events = getAllEvents()
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

export default AllEventsPage
