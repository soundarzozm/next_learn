import type { NextComponentType } from 'next'

const MENU_ITEMS = ['About', 'Projects', 'Posts', 'Resume']

const DropDownMenu: NextComponentType = () => {
	return (
		<div className="fixed right-5 top-13 md:hidden z-10 backdrop-filter backdrop-blur-3xl bg-opacity-70 rounded-xl w-48 py-2 shadow-xl transition ease-in-out duration-200">
			<ul className="space-y-2">
				{MENU_ITEMS.map((item, idx) => (
					<li
						key={idx}
						className="hover:bg-purple-200/20 dark:hover:bg-cyan-200/20 px-5 transition ease-in-out duration-200 text-lg font-light cursor-pointer text-gray-900 hover:text-purple-500 dark:text-gray-300 dark:hover:text-cyan-500"
					>
						{item}
					</li>
				))}
				<hr />
				<li className="hover:bg-purple-200/20 dark:hover:bg-cyan-200/20 px-5 transition ease-in-out duration-200 text-lg font-light cursor-pointer text-gray-900 hover:text-purple-500 dark:text-gray-300 dark:hover:text-cyan-500">
					Source &nbsp; ↗
				</li>
				<li className="hover:bg-purple-200/20 dark:hover:bg-cyan-200/20 px-5 transition ease-in-out duration-200 text-lg font-light cursor-pointer text-gray-900 hover:text-purple-500 dark:text-gray-300 dark:hover:text-cyan-500">
					Resume &nbsp; ↗
				</li>
			</ul>
		</div>
	)
}

export default DropDownMenu
