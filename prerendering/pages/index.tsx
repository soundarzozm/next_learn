const HomePage = (props: any) => {
	const { products } = props

	return (
		<ul>
			{products.map((product: any) => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	)
}

export async function getStaticProps() {
	return {
		props: {
			products: [{ id: 'p1', title: 'Product 1' }],
		},
	}
}

export default HomePage
