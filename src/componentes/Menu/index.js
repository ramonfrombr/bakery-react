import React from 'react';

import {
    MenuContainer,
    Icone,
    IconeFechar,
    MenuLateral,
    MenuLink,
    MenuBotaoWrap,
    MenuRota
} from './MenuElementos'

const Menu = ( { menuAberto, toggle } ) => {

    
    return (
        <MenuContainer menuAberto={menuAberto}>

            <Icone>
                <IconeFechar onClick={toggle} />
            </Icone>

            <MenuLateral>
                <MenuLink to='/'>Menu</MenuLink>
                <MenuLink to='/'>Contato</MenuLink>
                <MenuLink to='/'>Sobre</MenuLink>
            </MenuLateral>

            <MenuBotaoWrap>
                <MenuRota to='/'>Pedir Agora</MenuRota>
            </MenuBotaoWrap>
        </MenuContainer>
    )
}

export default Menu
