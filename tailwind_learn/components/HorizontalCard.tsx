import type { NextComponentType } from 'next'

const HorizontalCard: NextComponentType = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-32 mx-10">
				<div className="md:flex md:justify-between items-center cursor-pointer group">
					<img
						src="./projects.webp"
						className="md:h-64 md:w-96 md:p-0 shadow-gray-400 shadow-xl dark:shadow-none group-hover:-translate-y-1 duration-300 transition ease-in-out"
					/>
					<div className="md:ml-24 md:w-96 sm:w-3/4 mt-5 md:mt-0">
						<h2 className="text-3xl font-bold group-hover:text-purple-500 dark:group-hover:text-cyan-500 duration-200 transition ease-in-out">Projects</h2>
						<p className="text-lg font-light text-gray-500 mt-3">
							Stuff I have made ranging from mobile apps to fully
							featured web applications
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center mt-32 mx-10">
				<div className="md:flex md:justify-between items-center cursor-pointer group">
					<img
						src="./articles.webp"
						className="md:h-64 md:w-96 shadow-gray-400 shadow-xl dark:shadow-none group-hover:-translate-y-1 duration-300 transition ease-in-out"
					/>
					<div className="md:ml-24 md:w-96 sm:w-3/4 mt-5 md:mt-0">
						<h2 className="text-3xl font-bold group-hover:text-purple-500 dark:group-hover:text-cyan-500 duration-200 transition ease-in-out">Articles</h2>
						<p className="text-lg font-light text-gray-500 mt-3">
							A few words about technical stuff, opinions, and other miscellaneous topics
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default HorizontalCard
