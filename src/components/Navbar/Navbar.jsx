import React, { memo } from "react";
import downSVG from "../../assets/down.svg";
const Navbar = () => {
	return (
		<div className="w-full flex justify-between items-center pr-2 h-1/12 bg-blue-700">
			<div className="text-center p-2 pl-4">
				<p className="text-2xl text-white font-extrabold italic">SQL-E</p>
			</div>
			<div className="relative inline-flex">
				<img src={downSVG} alt="" className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" />
				<select className="border border-gray-300 rounded-full text-gray-600 h-8 px-4 pr-8 bg-white hover:border-gray-400 focus:outline-none appearance-none">
					<option>Choose Database</option>
					<option>Orders</option>
				</select>
			</div>
		</div>
	);
};

export default memo(Navbar);
