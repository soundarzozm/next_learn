import type { NextComponentType } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const NavBar: NextComponentType = () => {
	const { theme, setTheme } = useTheme()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<nav className="sticky top-0 z-10 backdrop-filter flex md:justify-around justify-between items-start backdrop-blur-lg bg-opacity-30 w-screen px-5 py-3 text-sm font-light dark:shadow-xl">
			<div className="w-2/3 flex md:justify-center md:items-center">
				<a href="#">
					<img src="/logo.png" className="h-7 w-7" />
				</a>
				<ul
					className={`md:flex sm:block pt-16 md:pt-0 md:justify-between md:space-y-0 space-y-4 justify-evenly md:flex-row flex-col text-2xl md:text-sm duration-150 transition ease-in-out ${
						isMenuOpen ? 'h-auto' : 'hidden md:block'
					}
						`}
				>
					<li>
						<a
							href="#"
							className="ml-12 hover:text-purple-500 dark:hover:text-cyan-500 hover:scale-110 duration-150 transition ease-in-out"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#"
							className="ml-12 hover:text-purple-500 dark:hover:text-cyan-500 hover:scale-110 duration-150 transition ease-in-out"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#"
							className="ml-12 hover:text-purple-500 dark:hover:text-cyan-500 hover:scale-110 duration-150 transition ease-in-out"
						>
							Posts
						</a>
					</li>
					<li>
						<a
							href="#"
							className="ml-12 hover:text-purple-500 dark:hover:text-cyan-500 hover:scale-110 duration-150 transition ease-in-out"
						>
							Resume
						</a>
					</li>
				</ul>
			</div>
			<div className="w-1/3 flex justify-end md:justify-center items-center h-7 duration-150 transition ease-in-out">
				<button
					className="md:hidden"
					onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={`h-6 w-6 mx-3 ${
							isMenuOpen
								? 'text-purple-500 dark:text-cyan-500'
								: 'dark:text-white text-black'
						} hover:scale-110 duration-150 transition ease-in-out`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
				{theme === 'dark' ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 cursor-pointer hover:scale-110 duration-150 transition ease-in-out stroke-cyan-500"
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5 cursor-pointer hover:scale-110 duration-150 transition ease-in-out stroke-purple-500"
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
						/>
					</svg>
				)}
			</div>
		</nav>
	)
}

export default NavBar
