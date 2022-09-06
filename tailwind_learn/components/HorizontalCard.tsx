import type { NextComponentType } from 'next'

const HorizontalCard: NextComponentType = () => {
	return (
		<>
			<div className="flex justify-center items-center mt-32">
				<div className="flex justify-between items-center">
					<img
						src="./projects.webp"
						className="h-64 w-96 shadow-gray-400 shadow-xl"
					/>
					<div className="ml-24 w-96">
						<h2 className="text-3xl font-bold">Projects</h2>
						<p className="text-lg font-light text-gray-500 mt-3">
							Stuff I have made ranging from mobile apps to fully
							featured web applications
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center mt-32">
				<div className="flex justify-between items-center">
					<img
						src="./articles.webp"
						className="h-64 w-96 shadow-gray-400 shadow-xl"
					/>
					<div className="ml-24 w-96">
						<h2 className="text-3xl font-bold">Articles</h2>
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
