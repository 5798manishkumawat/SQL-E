import React from "react";
import download from "../../assets/download.svg";
import downSVG from "../../assets/down.svg";
import useToast from "../../hooks/toast";

const Download = ({ result }) => {
	const { toastError, toastSuccess } = useToast();

	const generateCSV = () => {
		let csvfile = "data:text/csv;charset=utf-8,";
		const keys = Object.keys(result[0]);
		csvfile += keys.join(",");
		csvfile += "\n";

		result.forEach((res) => {
			let properties = Object.values(res);
			csvfile += properties.join(",");
			csvfile += "\n";
		});

		var encodedUri = encodeURI(csvfile);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "result.csv");
		document.body.appendChild(link);
		link.click();
	};

	const generateJSON = () => {
		let csvfile = "data:text/json;charset=utf-8,";
		var encodedUri = csvfile + encodeURIComponent(JSON.stringify(result));
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "result.json");
		document.body.appendChild(link);
		link.click();
	};

	const onDownload = () => {
		const format = document.getElementById("formats").value;

		if (format === "json") {
			generateJSON();
			toastSuccess("JSON file generated successfully!");
		} else if (format === "csv") {
			generateCSV();
			toastSuccess("CSV file generated successfully!");
		} else {
			toastError("Please select the format first!");
		}
	};

	return (
		<div className="flex items-center">
			<div className="relative inline-flex">
				<img src={downSVG} alt="" className="w-2 h-2 absolute top-0 right-0 m-2 sm:m-4 pointer-events-none" />
				<select
					id="formats"
					className="border border-gray-300 rounded-full text-gray-600 text-xs sm:text-sm h-6 sm:h-8 px-4 pr-8 bg-white hover:border-gray-400 focus:outline-none appearance-none"
				>
					<option value="">Format</option>
					<option value="csv">CSV</option>
					<option value="json">JSON</option>
				</select>
			</div>
			<img
				src={download}
				alt=""
				className="w-4 sm:w-8 mx-1 sm:mx-2 cursor-pointer"
				onClick={() => onDownload()}
			/>
		</div>
	);
};

export default Download;
