import type { NextComponentType } from 'next'

const NavBar: NextComponentType = () => {
	return (
		<nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 w-screen flex justify-evenly items-center p-3 text-sm font-extralight">
			<div className="flex justify-between items-center w-1/3">
				<a href="#">
					<img src="/logo.png" className="h-7 w-7" />
				</a>
				<a href="#">About</a>
				<a href="#">Projects</a>
				<a href="#">Posts</a>
				<a href="#">Resume</a>
			</div>
			<img src="/favicon.ico" className="h-5 w-5" />
		</nav>
	)
}

export default NavBar
