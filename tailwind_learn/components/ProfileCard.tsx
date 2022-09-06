import type { NextComponentType } from 'next'

const ProfileCard: NextComponentType = () => {
	return (
		<div className="flex justify-center mt-16">
			<div className="flex flex-col justify-center items-center">
				<img
					className="rounded-full border-8 border-white h-48 w-48 shadow-xl"
					src="/pfp.jpeg"
				/>
				<h1 className="text-5xl font-bold mt-7">Soundar Murugan</h1>
				<div className="font-sans text-md text-gray-500 mt-2">
					software engineer x product designer
				</div>
				<div className="font-sans text-md text-gray-500 flex justify-center items-center mt-1">
					<img src="./location-pin.png" className="w-4 h-4 mr-2" />
					bengaluru, india
				</div>
				<div className="font-sans text-md text-gray-500 mt-1">
					HE/HIM/HIS
				</div>
				<div className="flex flex-wrap justify-center gap-2 mt-7">
					<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
						<img
							src="./icons8-linkedin-50.png"
							className="w-5 h-5"
						/>
					</button>
					<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
						<img src="./icons8-github-50.png" className="w-5 h-5" />
					</button>
					<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
						<img
							src="./icons8-twitter-50.png"
							className="w-5 h-5"
						/>
					</button>
					<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
						<img src="./icons8-medium-50.png" className="w-5 h-5" />
					</button>
					<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
						<img
							src="./icons8-instagram-50.png"
							className="w-5 h-5"
						/>
					</button>
				</div>
                <button className='rounded-sm px-10 py-2 mt-10 text-sm font-normal text-gray-400 tracking-widest leading-none'>
                    LEARN MORE →
                </button>
			</div>
		</div>
	)
}

export default ProfileCard
