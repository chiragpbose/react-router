import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import data from "../assets/data.json";
import Slugs from "./Slugs";

export default class Articles extends Component {
	constructor() {
		super();
		this.state = {
			search: "",
		};
	}

	handleEvent = (event) => {
		let { name, value } = event.target;
		if (name === "search") {
			this.setState({
				search: value,
			});
		}
	};
	render() {
		let searchArticle = data.filter((article) =>
			article.title.toLowerCase().includes(this.state.search)
		);
		return (
			<>
				<div className="articles p-3  bg-sky-100 flex flex-col	">
					<input
						type="search"
						placeholder="search"
						name="search"
						values={this.state.search}
						onChange={this.handleEvent}
					/>

					{searchArticle.map((article) => {
						return (
							<>
								<NavLink
									className="underline text-sky-700"
									to={`${article.slug}`}
								>
									{" "}
									{article.title}{" "}
								</NavLink>

								{/* <Routes>
                            <Route path="articles/:slugs" element={<Slugs />} />
							</Routes> */}
								<div>{article.author}</div>
							</>
						);
					})}
				</div>
			</>
		);
	}
}
