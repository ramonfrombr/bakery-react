import React, { useState } from 'react';
import Navbar from '../Navbar';
import Menu from '../Menu';

import {
    IntroContainer,
    IntroConteudo,
    IntroItens,
    IntroH1,
    IntroP,
    IntroBotao
} from './IntroElementos';


const Intro = () => {

    const [menuAberto, definirMenuAberto] = useState(false);

    const toggle = () => {
        definirMenuAberto(!menuAberto);
    }



    return (
        <IntroContainer>

            <Navbar toggle={toggle} />

            <Menu  menuAberto={menuAberto} toggle={toggle}/>

            <IntroConteudo>
                <IntroItens>
                    <IntroH1>O Melhor Pão Caseiro da Região</IntroH1>
                    <IntroP>Fresquinho todos os dias!</IntroP>
                    <IntroBotao>Fazer Pedido</IntroBotao>
                </IntroItens>
            </IntroConteudo>

        </IntroContainer>
    )
}

export default Intro
