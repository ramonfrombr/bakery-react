import styled, { css } from 'styled-components';

import { NavLink as Link } from 'react-router-dom';

import { FaBreadSlice } from 'react-icons/fa';




const mobile = css`

    $largura: 440px;

    @mixin mobile {
        @media (max-width: #{$largura}) {
            @content;
        }
    }
`;


export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0.5);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 10px;
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    font-family: 'Birthstone Bounce', cursive;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @include mobile {
        font-size: 1.5rem;
    }
`;


export const NavIcone = styled.div`
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(FaBreadSlice)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;

export const NavLogo = styled.div`
    width: 50px;
    height: 50px;
`;
