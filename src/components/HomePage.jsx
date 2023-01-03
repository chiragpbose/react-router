import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HomePage extends Component {
	render() {
		return (
			<>
				<div className="p-3 flex flex-col ">
					🚀 Welcome to Homepage!
					<NavLink className="underline text-sky-700 bg-white h-10 flex items-center justify-center rounded-md" to="/articles">
						ARTICLES PAGE
					</NavLink>
				</div>
			</>
		);
	}
}
