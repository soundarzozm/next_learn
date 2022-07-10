import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/EventList'

const HomePage = (props: any) => {
	return (
		<>
			<EventList items={props.events} />
		</>
	)
}

export default HomePage

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents()

	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800
	}
}
