import { useEffect, useState } from 'react'
import useSWR from 'swr'

const LastSalesPage = () => {
	const [sales, setSales] = useState<any | undefined>()
	// const [isLoading, setIsLoading] = useState(false)

	const fetcher = (url: string) => fetch(url).then((res) => res.json())

	const { data, error } = useSWR(
		'https://nextjs-course-2b33e-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json',
		fetcher
	)

	useEffect(() => {
		if (data) {
			const transformedSales: {
				id: string
				username: string
				volume: number
			}[] = []

			for (const key in data) {
				transformedSales.push({
					id: key,
					username: data[key].username,
					volume: data[key].volume,
				})
			}
			setSales(transformedSales)
		}
	}, [data])

	// useEffect(() => {
	// 	setIsLoading(true)
	// 	fetch(
	// 		'https://nextjs-course-2b33e-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json'
	// 	)
	// 		.then((response: any) => response.json())
	// 		.then((data) => {
	// 			const transformedSales: {
	// 				id: string
	// 				username: string
	// 				volume: number
	// 			}[] = []

	// 			for (const key in data) {
	// 				transformedSales.push({
	// 					id: key,
	// 					username: data[key].username,
	// 					volume: data[key].volume,
	// 				})
	// 			}

	// 			setSales(transformedSales)
	// 			setIsLoading(false)
	// 		})
	// }, [])

	// if (isLoading) {
	// 	return <p>Loading...</p>
	// }

	// // useEffect runs after first render due to pre-rendering LOL.
	// if (!sales) {
	// 	return <p>No data yet...</p>
	// }

	if (error) {
		return <p>Failed to load.</p>
	}

	if (!data || !sales) {
		return <p>Loading...</p>
	}

	return (
		<ul>
			{sales.map((sale: any) => {
				return (
					<li key={sale.id}>
						{sale.username} - ${sale.volume}
					</li>
				)
			})}
		</ul>
	)
}

export default LastSalesPage
