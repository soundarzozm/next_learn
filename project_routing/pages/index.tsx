import { getFeaturedEvents } from "../DummyData"
import EventList from "../components/events/EventList"

const HomePage = () => {

	const featuredEvents = getFeaturedEvents()

	return <>
		<EventList items={featuredEvents}/>
	</>
}

export default HomePage
