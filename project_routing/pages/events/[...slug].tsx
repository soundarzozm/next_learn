import { useRouter } from 'next/router'

const FilteredEventsPage = () => {
	const router = useRouter()
	let filteredEventIDs: string[] = ['hello', 'world']

	console.log(router.query)

	return (
		<>
			{filteredEventIDs.map((event: any) => {
				return (
					<h1 key={event}>
						<div>{event}</div>
					</h1>
				)
			})}
		</>
	)
}

export default FilteredEventsPage
