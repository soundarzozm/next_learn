import fs from 'fs/promises'
import path from 'path'

const ProductDetailPage = (props: any) => {
	const { loadedProduct } = props

	// Takes time for generation since just-in-time.
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

// Mention which instances of the dynamic [pid] to be pre-rendered.
export async function getStaticPaths() {
	return {
		paths: [{ params: { pid: 'p1' } }],
		fallback: 'blocking', // If true then allow instances not mentioned above as well but render them just-in-time.
	} // fallback can be true, false, or 'blocking'. Blocking will wait till generation is complete to render.
}

export async function getStaticProps(context: any) {
	const { params } = context
	const productId = params.pid

	const filePath: string = path.join(
		process.cwd(),
		'data',
		'dummy-backend.json'
	) //from root directory
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData.toString())

	const product = data.products.find(
		(product: any) => product.id == productId
	)

	return {
		props: {
			loadedProduct: product,
		},
	}
}

export default ProductDetailPage
