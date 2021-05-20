import React from "react";

const ResultTable = ({ result }) => {
	return (
		<>
			<table className="w-full my-2 h-5/6 text-center table-auto border-collapse border border-black">
				<thead className="">
					<tr className="bg-black text-white">
						<th className="border border-black">Order ID</th>
						<th className="border border-black">Customer Id</th>
						<th className="border border-black">Employee Id</th>
						<th className="border border-black">Ordered Date</th>
						<th className="border border-black">Shipped Date</th>
						<th className="border border-black">Freight</th>
						<th className="border border-black">Ship Name</th>
						<th className="border border-black">Ship Address</th>
					</tr>
				</thead>
				<tbody>
					{result &&
						result.map((row, index) => {
							const mod = index % 2;
							return (
								<tr className={mod && "bg-gray-300"}>
									<td className="border border-black">{row.orderID}</td>
									<td className="border border-black">{row.customerId}</td>
									<td className="border border-black">{row.employeeId}</td>
									<td className="border border-black">{row.orderedDate}</td>
									<td className="border border-black">{row.shippedDate}</td>
									<td className="border border-black">{row.freight}</td>
									<td className="border border-black">{row.shipName}</td>
									<td className="border border-black">{row.shipAddress}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</>
	);
};

export default ResultTable;
