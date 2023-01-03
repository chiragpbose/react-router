import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Articles from "./Articles";
import Slugs from "./Slugs";
import NoPage from "./NoPage";

export default class Navbar extends Component {
	navLinkStyle = ({ isActive }) => {
		return {
			fontWeight: isActive ? "bold" : "normal",
			TextDecoderation: isActive ? "none" : "underline",
			background: isActive ? "rgb(209 233 233)" : "none",
		};
	};
	render() {
		return (
			<>
				<nav className="flex flex-col bg-slate-200 w-1/6 h-screen">
					<NavLink
						className="h-10 flex items-center"
						to="/"
						style={this.navLinkStyle}
					>
						<img
							className="w-7"
							src="https://www.svgrepo.com/show/35381/white-home.svg"
							alt=""
						/>
						Home
					</NavLink>
					<NavLink
						className="h-10 flex items-center "
						to="articles"
						style={this.navLinkStyle}
					>
						<img
							className="w-7"
							src="https://icons.veryicon.com/png/o/miscellaneous/decon/article-10.png"
							alt=""
						/>
						Articles
					</NavLink>
				</nav>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="articles" element={<Articles />} />
					<Route path="articles/:slugs" element={<Slugs />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</>
		);
	}
}
