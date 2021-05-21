import { lazy, Suspense, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import BgSVG from "./bg.svg";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import QueryTool from "./components/QueryTool/QueryTool";
import { queries } from "./components/QueryTool/dummyData";
import { ToastContainer } from "react-toastify";

const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));

const styles = {
	backgroundImage: `url(${BgSVG})`,
};

const App = () => {
	const [query, setQuery] = useState("");
	const [queryHistory, setQueryHistory] = useState(queries);

	return (
		<div
			className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover"
			style={styles}
		>
			<div className="w-5/6 h-11/12 sm:h-5/6 flex flex-col bg-white shadow-xl rounded-lg border-2 border-blue-700 bg-blue-700">
				<Navbar />
				<div className="w-full h-10/12 flex flex-col sm:flex-row bg-white">
					<Suspense fallback={<div>Sidebar Loading...</div>}>
						<Sidebar queryHistory={queryHistory} setQuery={setQuery} />
					</Suspense>

					<QueryTool
						query={query}
						setQuery={setQuery}
						queryHistory={queryHistory}
						setQueryHistory={setQueryHistory}
					/>
				</div>
				<Footer />
				<ToastContainer
					position="bottom-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</div>
		</div>
	);
};

export default App;
