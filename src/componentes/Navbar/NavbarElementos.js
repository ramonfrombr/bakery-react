import styled, { css } from "styled-components";

import { NavLink as Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

const mobile = css`
	$largura: 440px;

	@mixin mobile {
		@media (max-width: #{$largura}) {
			@content;
		}
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 700;
	padding-left: 30px;
	padding-right: 10px;
	background: rgba(0, 0, 0, 0.5);
`;

export const NavLogo = styled.div`
	width: 40px;
	height: 40px;
`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: 2rem;
	font-family: "Birthstone Bounce", cursive;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;

	@include mobile {
		font-size: 1.5rem;
	}
`;

export const NavIcone = styled.div`
	width: 40px;
	height: 40px;
	display: flex;
	align-items: center;
`;

export const Bars = styled(FaBars)`
	width: 40px;
	height: 40px;
	margin-top: 15px;
	transform: translate(-50%, -15%);
	color: white;
	cursor: pointer;

	:hover {
	}
`;
