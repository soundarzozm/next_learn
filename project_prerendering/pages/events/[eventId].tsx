import EventContent from '../../components/event-detail/EventContent'
import EventLogistics from '../../components/event-detail/EventLogistics'
import EventSummary from '../../components/event-detail/EventSummary'
import ErrorAlert from '../../components/ui/error-alert'

import { getEventById, getFeaturedEvents } from '../../helpers/api-util'

const EventDetail = (props: any) => {
	const event = props.selectedEvent

	if (!event) {
		return (
			<ErrorAlert>
				<p>No event found!</p>
			</ErrorAlert>
		)
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	)
}

export default EventDetail

export async function getStaticProps(context: any) {
	const eventId = context.params.eventId
	const event = await getEventById(eventId)

	return {
		props: {
			selectedEvent: event,
		},
		revalidate: 30
	}
}

export async function getStaticPaths() {

	const events = await getFeaturedEvents()
	const paths = events.map((event) => ({params: {eventId: event.id}}))

	return {
		paths: paths,
		fallback: 'blocking'
	}
}
