import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className="bg-gradient-to-t from-purple-300 to-white h-screen">
			<div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen">
				<div className="rounded-2xl bg-white shadow-2xl p-6 space-y-2 w-96">
					<img src="/HUSTLE_black.png" className="rounded-xl" />
					<div className="font-sans ml-2 pt-4 font-bold text-2xl">HUSTLE.</div>
					<div className="font-sans text-sm text-gray-500 px-2 pb-4 pt-1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
