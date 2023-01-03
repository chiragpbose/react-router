import {
	NavLink,
	useParams,
	useNavigate,
	Routes,
	Route,
} from "react-router-dom";
import React from "react";
import Articles from "./Articles";

export default function Slugs() {
	let param = useParams();
	console.log(param);
	return (
		<div className="">
			<NavLink to="/articles">
				<h5 className="underline text-sky-700">👈 Go back to articles</h5>
			</NavLink>

			<div>
				The slug of the article is:<b>{param.slugs}</b>{" "}
			</div>
		</div>
	);
}
