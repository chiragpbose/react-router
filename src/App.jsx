import Navbar from "./components/Navbar";
import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Route, Routes, NavLink } from "react-router-dom";
import Slugs from "./components/Slugs";

function App() {
	return (
		<>
			<Header />
			<div className="body-container flex  bg-sky-100 ">
				<Navbar />
			</div>
			{/* <Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="articles" element={<Articles />} />
				<Route path="articles/:slugs" element={<Slugs />} />
			</Routes> */}
		</>
	);
}

export default App;
