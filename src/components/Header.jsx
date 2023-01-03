import React, { Component } from "react";

export default class Header extends Component {
	render() {
		return (
			<div className="Header bg-emerald-300 p-2 flex gap-x-5">
				<img className="w-7" src="https://www.freeiconspng.com/uploads/dashboard-icon-32.png" alt="" />
				Dashboard
			</div>
		);
	}
}
