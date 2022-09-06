import type { NextComponentType } from 'next'

const Footer: NextComponentType = () => {
	return (
		<div className="mt-40 flex flex-col justify-center items-center">
			<hr className="w-1/2" />
			<div className="grid grid-cols-3 gap-60 mt-14">
				<img src="/logo.png" className="h-7 w-7" />
				<div>
					<div className="font-regular tracking-wider mb-4 text-gray-800">
						GENERAL
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600">
						About
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600">
						Projecs
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600">
						Blog
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600">
						Mail
					</div>
				</div>
				<div>
					<div className="font-regular tracking-wider mb-4 text-gray-800">
						SPECIFICS
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600">
						Resume
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600">
						Source
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600">
						About Website
					</div>
				</div>
			</div>
			<div className="flex flex-wrap justify-center gap-2 mt-10">
				<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
					<img src="./icons8-linkedin-50.png" className="w-6 h-6" />
				</button>
				<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
					<img src="./icons8-github-50.png" className="w-6 h-6" />
				</button>
				<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
					<img src="./icons8-twitter-50.png" className="w-6 h-6" />
				</button>
				<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
					<img src="./icons8-medium-50.png" className="w-6 h-6" />
				</button>
				<button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
					<img src="./icons8-instagram-50.png" className="w-6 h-6" />
				</button>
			</div>
			<div className="mt-10 flex flex-col justify-center items-center text-xs text-gray-500 mb-20 font-light">
				<p className='mb-1'>© 2022 Soundar Murugan</p>
				<p>Designed & Built with ❤️  in India</p>
			</div>
		</div>
	)
}

export default Footer
