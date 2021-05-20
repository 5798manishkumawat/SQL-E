import { lazy, Suspense, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Bg from "./bg.svg";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import QueryTool from "./components/QueryTool/QueryTool";
import { queries } from "./components/QueryTool/dummyData";
import { ToastContainer } from "react-toastify";
// const ToastContainer = lazy(() => import("./components/Toast/toast"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const styles = {
	backgroundImage: `url(${Bg})`,
};

const App = () => {
	const [query, setQuery] = useState("");
	const [queryHistory, setQueryHistory] = useState(queries);

	return (
		<div
			className="w-full h-screen flex justify-center items-center bg-no-repeat bg-cover"
			style={styles}
		>
			<div className="w-5/6 h-5/6 flex flex-col bg-white shadow-xl rounded-lg">
				<Navbar />
				<div className="w-full h-10/12 flex">
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
				{/* <Suspense fallback={<div></div>}> */}
				<ToastContainer
					position="bottom-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				{/* </Suspense> */}
			</div>
		</div>
	);
};

export default App;
