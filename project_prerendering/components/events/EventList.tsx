import EventItem from './EventItem'
import classes from './EventList.module.css'

const EventList = (props: any) => {
	const { items } = props

	return (
		<ul className={classes.list}>
			{items.map((event: any) => {
				return (
					<EventItem
                        key={event.id}
						id={event.id}
						title={event.title}
						location={event.location}
                        date={event.date}
                        image={event.image}
					/>
				)
			})}
		</ul>
	)
}

export default EventList
