const UserProfilePage = (props: any) => {
	return (
		<>
			<h1>{props.username}</h1>
		</>
	)
}

// Run for every incoming request
export async function getServerSideProps(context: any) {
	// return object same format as getStaticProps
	// except no re-validate option since it'll always run again

    const {params, req, res} = context

	return {
		props: {
			username: 'Max',
		},
	}
}

export default UserProfilePage
