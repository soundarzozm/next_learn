const UserIdPage = (props: any) => {
	return <h1>{props.id}</h1>
}

export default UserIdPage

// Server-Side-Rendering means that the server renders the page and sends it to the client.
export async function getServerSideProps(context: any) {
	const { params } = context
	const userId = params.uid

	return {
		props: {
			id: 'userid-' + userId,
		},
	}
}
