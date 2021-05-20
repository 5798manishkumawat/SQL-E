import React, { useState } from "react";
import "./scrollbar.css";
import SidePlay from "../../assets/play.svg";
import Loading from "../../assets/loading.svg";
import ResultTable from "./ResultTable";
import { queryData } from "./dummyData";
import useToast from "../../hooks/toast";
import Download from "../Download/download";

const QueryTool = ({ query, setQuery, queryHistory, setQueryHistory }) => {
	const [result, setResult] = useState();
	const [load, setLoad] = useState(false);
	const { toastError, toastSuccess } = useToast();
	const handleQuery = () => {
		setResult(null);
		if (query) {
			setLoad(true);
			let data = queryData.filter((res) => res.query === query);
			let queryhistory = [query, ...queryHistory];

			if (data.length) {
				data = data[0].result;
				setTimeout(() => {
					setResult(data);
					setLoad(false);
					setQueryHistory(queryhistory);
					const timeTaken = Math.round(Math.random() * 1501 + 500);
					toastSuccess(`Query succesfully run in ${timeTaken}ms!`);
				}, 2000);
			} else {
				toastError("Error: Query is incorrect!!");
				setLoad(false);
			}
		} else {
			toastError("Please write or select a query!");
		}
	};

	return (
		<div className="w-3/4 h-full bg-gray-100 flex flex-col justify-around items-center ">
			<div className="w-5/6 h-1/3 flex flex-col bg-white rounded-lg">
				<div className="mx-1 my-2 flex justify-between">
					<p className="w-1/8 border-2 px-2 ring-4 text-center text-sm font-bold rounded-full">
						Query
					</p>
					<div className="mr-4">
						<img
							className="w-6 h-6 cursor-pointer ring-4 ring-green-300 rounded-full"
							src={load ? Loading : SidePlay}
							onClick={() => handleQuery()}
							alt=""
						/>
					</div>
				</div>
				<hr />
				<div className="p-4 h-5/6">
					<textarea
						className="resize-none shadow appearance-none border rounded w-full h-full py-4 px-4 text-gray-700 font-semibold leading-tight focus:outline-none focus:shadow-outline"
						id="query"
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Write query here..."
					/>
				</div>
			</div>
			<div className="w-full h-1/2 px-2 flex flex-col justify-between border-t-2 border-blue-700">
				<div className="pl-4 bg-gray-200 flex justify-between">
					<p className="w-2/3 text-lg font-bold text-center py-2">
						Query Result
					</p>
					{result && <Download result={result} />}
				</div>
				<div className="w-full h-5/6 flex flex-col justify-center  customScroller overflow-scroll">
					{result && <ResultTable result={result} />}
				</div>
			</div>
		</div>
	);
};

export default QueryTool;
