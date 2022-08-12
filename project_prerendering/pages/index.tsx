import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/EventList'

// NextJS meta add anywhere
import Head from 'next/head'

const HomePage = (props: any) => {
	return (
		<>
			<Head>
				<title>Featured Events</title>
				<meta name='description' content='Find the collection of featured events in this project!'/>
			</Head>
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
		revalidate: 1800,
	}
}
