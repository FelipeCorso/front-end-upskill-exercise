import React from "react";

import { Link } from "react-router-dom";
import { Container } from "./styled";

export const NavBar = () => (
	<Container>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/report">Report</Link>
			</li>
		</ul>
	</Container>
);
