import fs from 'fs/promises'
import path from 'path'

import Link from 'next/link'

const HomePage = (props: any) => {
	const { products } = props

	return (
		<ul>
			{products.map((product: any) => (
				<li key={product.id}>
					<Link href={`/${product.id}`}>{product.title}</Link>
				</li>
			))}
		</ul>
	)
}

// Incremental Static Generation will re-generate the page in every specific set intervals.
export async function getStaticProps(context: any) {
	console.log('(Re-)Generating...')
	const filePath: string = path.join(
		process.cwd(),
		'data',
		'dummy-backend.json'
	) //from root directory
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData.toString())

	if (!data) {
		return {
			redirect: {
				destination: '/no-data', // Re-direct to a route
			},
		}
	}

	if (data.products.length === 0) {
		return { notFound: true } // Return a 404 page
	}

	return {
		props: {
			products: data.products,
		},
		revalidate: 10, // Re-generate the server-side page every 10 seconds
	}
}

export default HomePage
