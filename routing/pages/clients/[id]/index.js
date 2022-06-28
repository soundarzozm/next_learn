import { useRouter } from 'next/router'

function ClientProjectsPage() {
	const router = useRouter()
	console.log(router.query)

	const loadProjectHandler = () => {
		// router.push(`/clients/${router.query.id}/project-A`);
		router.push({
			pathname: '/clients/[id]/[clientprojectid]',
			query: { id: router.query.id, clientprojectid: 'project-A' },
		})
	}

	return (
		<>
			<h1>The Projects of {router.query.id}</h1>
			<button onClick={loadProjectHandler}>Load project-A</button>
		</>
	)
}

export default ClientProjectsPage
