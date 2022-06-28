import { useRouter } from 'next/router'

const PortfolioProjectPage = () => {
	const router = useRouter()

	return <>Portfolio Project Page - {router.query.projectid}</>
}

export default PortfolioProjectPage
