import fs from 'fs/promises'
import path from 'path'

const ProductDetailPage = (props: any) => {
	const { loadedProduct } = props

	// Takes time for generation since just-in-time.
	// Used here when fallback is true
	if (!loadedProduct) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</div>
	)
}

const getData = async () => {
	const filePath: string = path.join(
		process.cwd(),
		'data',
		'dummy-backend.json'
	) //from root directory
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData.toString())

	return data
}

// Mention which instances of the dynamic [pid] to be pre-rendered.
export async function getStaticPaths() {
	const data = await getData()

	const ids = data.products.map((product: any) => product.id)
	const pathsWithParams = ids.map((id: string) => ({ params: { pid: id } }))

	return {
		paths: pathsWithParams,
		fallback: true, // If true then allow instances not mentioned above as well but render them just-in-time.
	} // fallback can be true, false, or 'blocking'. Blocking will wait till generation is complete to render.
}

// Static-Site-Generation means that the specific pages are generated in build time (with template and content) and then deployed.
export async function getStaticProps(context: any) {
	const { params } = context
	const productId = params.pid

	const data = await getData()

	const product = data.products.find(
		(product: any) => product.id == productId
	)
	
	// Used when fallback is true and pid does not exist in data.
	if (!product) {
		return { notFound: true }
	}

	return {
		props: {
			loadedProduct: product,
		},
	}
}

export default ProductDetailPage
