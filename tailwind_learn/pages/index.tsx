import type { NextPage } from 'next'
import Footer from '../components/Footer'
import HorizontalCard from '../components/HorizontalCard'
import NavBar from '../components/NavBar'
import ProfileCard from '../components/ProfileCard'

const Home: NextPage = () => {
	return (
		<div className="">
			<NavBar />
			<ProfileCard />
			<HorizontalCard />
			<Footer />
		</div>
	)
}

export default Home
