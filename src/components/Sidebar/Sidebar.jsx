import React from "react";
import SidePlay from "../../assets/sideplay.svg";
import "../QueryTool/scrollbar.css";
const Sidebar = ({ queryHistory, setQuery }) => {
	return (
		<div className="sm:w-1/4 h-1/3 sm:h-full sm:border-r-2 border-blue-700 py-2 sm:py-4">
			<p className="pl-2 sm:pl-4 font-semibold sm:text-lg">Recent Queries</p>
			<hr className="" />
			<div className="sm:pt-2 h-full customScroller overflow-scroll">
				{queryHistory.map((query,index) => {
					return (
						<div className="h-12 sm:h-20 lg:h-10 flex items-center bg-gray-100 my-2 p-1" key={index}>
							<img
								className="w-4 sm:w-6 h-4 sm:h-6 cursor-pointer"
								src={SidePlay}
								onClick={() => setQuery(query)}
								alt=""
							/>
							<p className="ml-1 text-xs sm:text-sm font-semibold p-1">{query}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
