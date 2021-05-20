import React from "react";
import SidePlay from "../../assets/sideplay.svg";
import "../QueryTool/scrollbar.css";
const Sidebar = ({ queryHistory, setQuery }) => {
	return (
		<div className="w-1/4 h-full border-r-2 border-blue-700 py-4">
			<p className="pl-4 font-semibold text-lg">Recent Queries</p>
			<hr className="" />
			<div className="pt-2 h-full customScroller overflow-scroll">
				{queryHistory.map((query,index) => {
					return (
						<div className="h-20 lg:h-10 flex items-center bg-gray-100 my-2 p-1" key={index}>
							<img
								className="w-6 h-6 cursor-pointer"
								src={SidePlay}
								onClick={() => setQuery(query)}
								alt=""
							/>
							<p className="ml-1 text-sm font-semibold p-1">{query}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
