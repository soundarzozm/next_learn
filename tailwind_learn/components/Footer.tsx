import type { NextComponentType } from 'next'

const Footer: NextComponentType = () => {
	return (
		<div className="mt-40 flex flex-col justify-center items-center">
			<hr className=" max-w-4xl w-screen" />
			<div className="md:grid md:grid-cols-3 md:gap-60 mt-14 flex flex-row md:w-auto w-screen justify-around mx-10">
				<img
					src="/logo.png"
					className="h-10 w-10 cursor-pointer duration-200 transition ease-in-out"
				/>
				<div className="">
					<div className="font-regular tracking-wider mb-4 text-gray-800 dark:text-gray-300">
						GENERAL
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600 cursor-pointer dark:text-gray-400 hover:underline hover:text-gray-800 dark:hover:text-gray-200 duration-200 transition ease-in-out">
						About
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600 cursor-pointer dark:text-gray-400 hover:underline hover:text-gray-800 dark:hover:text-gray-200 duration-200 transition ease-in-out">
						Projecs
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600 cursor-pointer dark:text-gray-400 hover:underline hover:text-gray-800 dark:hover:text-gray-200 duration-200 transition ease-in-out">
						Blog
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600 cursor-pointer dark:text-gray-400 hover:underline hover:text-gray-800 dark:hover:text-gray-200 duration-200 transition ease-in-out">
						Mail
					</div>
				</div>
				<div>
					<div className="font-regular tracking-wider mb-4 text-gray-800 dark:text-gray-300">
						SPECIFICS
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600 cursor-pointer dark:text-gray-400 hover:underline hover:text-gray-800 dark:hover:text-gray-200 duration-200 transition ease-in-out">
						Resume
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600 cursor-pointer dark:text-gray-400 hover:underline hover:text-gray-800 dark:hover:text-gray-200 duration-200 transition ease-in-out">
						Source
					</div>
					<div className="font-light text-sm tracking-wider mt-2 text-gray-600 cursor-pointer dark:text-gray-400 hover:underline hover:text-gray-800 dark:hover:text-gray-200 duration-200 transition ease-in-out">
						About Website
					</div>
				</div>
			</div>
			<div className="flex flex-wrap justify-center gap-2 mt-10">
				<button
					className="p-2 font-semibold inline-flex items-center space-x-2 rounded hover:-translate-y-1 duration-300 transition ease-in-out group"
					onClick={() =>
						window.open(
							'https://linkedin.com/in/soundar-murugan/',
							'_blank'
						)
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 64 64"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-7 h-7 fill-gray-500 stroke-gray-500 group-hover:fill-gray-900 group-hover:stroke-gray-900 dark:group-hover:fill-gray-300 dark:group-hover:stroke-gray-300 duration-300 transition ease-in-out"
					>
						{' '}
						<path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.501953 18.503906 C 20.872953 18.503906 19.552734 19.824172 19.552734 21.451172 C 19.552734 23.078172 20.871953 24.400391 22.501953 24.400391 C 24.126953 24.400391 25.447266 23.079172 25.447266 21.451172 C 25.447266 19.826172 24.126953 18.503906 22.501953 18.503906 z M 37.933594 26.322266 C 35.473594 26.322266 33.823437 27.672172 33.148438 28.951172 L 33.078125 28.951172 L 33.078125 26.728516 L 28.228516 26.728516 L 28.228516 43 L 33.28125 43 L 33.28125 34.949219 C 33.28125 32.826219 33.687359 30.771484 36.318359 30.771484 C 38.912359 30.771484 38.945312 33.200891 38.945312 35.087891 L 38.945312 43 L 44 43 L 44 34.074219 C 44 29.692219 43.054594 26.322266 37.933594 26.322266 z M 19.972656 26.728516 L 19.972656 43 L 25.029297 43 L 25.029297 26.728516 L 19.972656 26.728516 z"></path>
					</svg>
				</button>
				<button
					className="p-2 font-semibold inline-flex items-center space-x-2 rounded hover:-translate-y-1 duration-300 transition ease-in-out group"
					onClick={() =>
						window.open('https://github.com/soundarzozm/', '_blank')
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 fill-gray-500 stroke-gray-500 group-hover:fill-gray-900 group-hover:stroke-gray-900 dark:group-hover:fill-gray-300 dark:group-hover:stroke-gray-300 duration-300 transition ease-in-out"
					>
						{' '}
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</button>
				<button
					className="p-2 font-semibold inline-flex items-center space-x-2 rounded hover:-translate-y-1 duration-300 transition ease-in-out group"
					onClick={() =>
						window.open(
							'https://twitter.com/soundarzozm/',
							'_blank'
						)
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 fill-gray-500 stroke-gray-500 group-hover:fill-gray-900 group-hover:stroke-gray-900 dark:group-hover:fill-gray-300 dark:group-hover:stroke-gray-300 duration-300 transition ease-in-out"
					>
						{' '}
						<path d="M21.634,4.031c-0.815,0.385-2.202,1.107-2.899,1.245c-0.027,0.007-0.049,0.016-0.075,0.023 c-0.813-0.802-1.927-1.299-3.16-1.299c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.218,0-5.568-1.679-7.327-3.837 C3.438,4.873,3.188,5.024,3.136,5.23C3.019,5.696,2.979,6.475,2.979,7.031c0,1.401,1.095,2.777,2.8,3.63 c-0.314,0.081-0.66,0.139-1.02,0.139c-0.424,0-0.912-0.111-1.339-0.335c-0.158-0.083-0.499-0.06-0.398,0.344 c0.405,1.619,2.253,2.756,3.904,3.087c-0.375,0.221-1.175,0.176-1.543,0.176c-0.136,0-0.609-0.032-0.915-0.07 c-0.279-0.034-0.708,0.038-0.349,0.582c0.771,1.167,2.515,1.9,4.016,1.928c-1.382,1.084-3.642,1.48-5.807,1.48 c-0.438-0.01-0.416,0.489-0.063,0.674C3.862,19.504,6.478,20,8.347,20C15.777,20,20,14.337,20,8.999 c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.589-0.425,1.491-1.163,1.947-1.728c0.155-0.192,0.03-0.425-0.181-0.352 c-0.543,0.189-1.482,0.555-2.07,0.625c1.177-0.779,1.759-1.457,2.259-2.21C22.109,4.168,21.895,3.907,21.634,4.031z"></path>
					</svg>
				</button>
				<button
					className="p-2 font-semibold inline-flex items-center space-x-2 rounded hover:-translate-y-1 duration-300 transition ease-in-out group"
					onClick={() =>
						window.open(
							'https://medium.com/@soundarzozm/',
							'_blank'
						)
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 64 64"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 fill-gray-500 stroke-gray-500 group-hover:fill-gray-900 group-hover:stroke-gray-900 dark:group-hover:fill-gray-300 dark:group-hover:stroke-gray-300 duration-300 transition ease-in-out"
					>
						<path d="M 18.998047 15 A 17.002 17.002 0 0 0 18.998047 49.003906 A 17.002 17.002 0 0 0 18.998047 15 z M 45.498047 16 A 8.502 16.002 0 0 0 45.498047 48.003906 A 8.502 16.002 0 0 0 45.498047 16 z M 58.5 17 A 3.5 15.002 0 1 0 58.5 47.003906 A 3.5 15.002 0 1 0 58.5 17 z"></path>
					</svg>
				</button>
				<button
					className="p-2 font-semibold inline-flex items-center space-x-2 rounded hover:-translate-y-1 duration-300 transition ease-in-out group"
					onClick={() =>
						window.open(
							'https://instagram.com/soundarzozm/',
							'_blank'
						)
					}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 64 64"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-7 h-7 fill-gray-500 stroke-gray-500 group-hover:fill-gray-900 group-hover:stroke-gray-900 dark:group-hover:fill-gray-300 dark:group-hover:stroke-gray-300 duration-300 transition ease-in-out"
					>
						<path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"></path>
					</svg>
				</button>
			</div>
			<div className="mt-10 flex flex-col justify-center items-center text-xs text-gray-500 dark:text-gray-400 mb-20 font-light cursor-default">
				<p className="mb-1">© 2022 Soundar Murugan</p>
				<p>Designed & Built with ❤️ in India</p>
			</div>
		</div>
	)
}

export default Footer
