import type { NextComponentType } from 'next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const NavBar: NextComponentType = () => {
	const { theme, setTheme } = useTheme()

	return (
		<nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 w-screen p-3 text-sm font-light dark:shadow-xl">
			<button className="md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 dark:text-white text-black"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			<ul className="">
				<li>
					<a href="#">
						<img src="/logo.png" className="h-7 w-7" />
					</a>
				</li>
				<li>
					<a
						href="#"
						className="hover:text-purple-500 dark:hover:text-cyan-500 hover:scale-110 duration-150 transition ease-in-out"
					>
						About
					</a>
				</li>
				<li>
					<a
						href="#"
						className="hover:text-purple-500 dark:hover:text-cyan-500 hover:scale-110 duration-150 transition ease-in-out"
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href="#"
						className="hover:text-purple-500 dark:hover:text-cyan-500 hover:scale-110 duration-150 transition ease-in-out"
					>
						Posts
					</a>
				</li>
				<li>
					<a
						href="#"
						className="hover:text-purple-500 dark:hover:text-cyan-500 hover:scale-110 duration-150 transition ease-in-out"
					>
						Resume
					</a>
				</li>
			</ul>
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
		</nav>
	)
}

export default NavBar
