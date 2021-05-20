import React, { memo } from "react";

const Footer = () => {
	return (
		<div className="w-full flex  h-1/12 bg-blue-700">
			<div className="text-center p-2 pl-4">
				{/* <p className="text-2xl text-white font-extrabold italic">SQL-E</p> */}
			</div>
		</div>
	);
};

export default memo(Footer);
