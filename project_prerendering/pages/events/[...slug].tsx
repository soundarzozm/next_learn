import { getFilteredEvents } from '../../helpers/api-util'
import EventList from '../../components/events/EventList'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

const FilteredEventsPage = (props: any) => {
	if (props.hasError) {
		return (
			<>
				<ErrorAlert>
					<p className="center">
						Invalid filter. Please adjust your values!
					</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>
						Show All Events
					</Button>
				</div>
			</>
		)
	}

	const filteredEvents = props.events

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>

				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		)
	}

	const date = new Date(props.date.year, props.date.month - 1)

	return (
		<div>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</div>
	)
}

export async function getServerSideProps(context: any) {
	const { params } = context

	const filteredData = params.slug

	const filteredYear = filteredData[0]
	const filteredMonth = filteredData[1]

	const numYear = +filteredYear
	const numMonth = +filteredMonth

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numYear > 2030 ||
		numYear < 2000 ||
		numMonth > 12 ||
		numMonth < 1
	) {
		return {
			props: { hasError: true },
		}
	}

	const filteredEvents = await getFilteredEvents({
		year: numYear,
		month: numMonth,
	})

	return {
		props: {
			events: filteredEvents,
			date: {
				year: numYear,
				month: numMonth
			}
		},
	}
}

export default FilteredEventsPage
