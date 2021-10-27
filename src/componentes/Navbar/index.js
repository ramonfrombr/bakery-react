import React from "react";

import { Nav, NavLink, NavIcone, Bars, NavLogo } from "./NavbarElementos";

import Logo from "../../imagens/logo.png";

export default function Navbar({ toggle }) {
	return (
		<>
			<Nav>
				<NavLogo>
					<img src={Logo} style={{ width: "inherit" }} alt="" />
				</NavLogo>

				<NavLink to="/">O Melhor de Feu Rosa</NavLink>

				<NavIcone onClick={toggle}>
					<Bars />
				</NavIcone>
			</Nav>
		</>
	);
}
