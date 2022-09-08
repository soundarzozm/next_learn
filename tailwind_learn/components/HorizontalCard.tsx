import type { NextComponentType } from 'next'

const HorizontalCard: NextComponentType = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-32">
				<div className="flex justify-between items-center cursor-pointer group">
					<img
						src="./projects.webp"
						className="h-64 w-96 shadow-gray-400 shadow-xl dark:shadow-none group-hover:-translate-y-1 duration-300 transition ease-in-out"
					/>
					<div className="ml-24 w-96">
						<h2 className="text-3xl font-bold group-hover:text-purple-500 dark:group-hover:text-cyan-500 duration-200 transition ease-in-out">Projects</h2>
						<p className="text-lg font-light text-gray-500 mt-3">
							Stuff I have made ranging from mobile apps to fully
							featured web applications
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center mt-32">
				<div className="flex justify-between items-center cursor-pointer group">
					<img
						src="./articles.webp"
						className="h-64 w-96 shadow-gray-400 shadow-xl dark:shadow-none group-hover:-translate-y-1 duration-300 transition ease-in-out"
					/>
					<div className="ml-24 w-96">
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
