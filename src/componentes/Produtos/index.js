import React from 'react';

import {
    ProdutosContainer,
    ProdutosCabecalho,
    ProdutosWrapper,
    ProdutoCartao,
    ProdutoImagem,
    ProdutoInfo,
    ProdutoTitulo,
    ProdutoDescricao,
    ProdutoPreco,
    ProdutoBotao
} from './ProdutosElementos';



const Produtos = ({ cabecalho, produtos }) => {
    return (
        <ProdutosContainer>

            <ProdutosCabecalho>
                {cabecalho}
            </ProdutosCabecalho>

            <ProdutosWrapper>
                {produtos.map((produto, index) => {

                    return (
                        <ProdutoCartao key={index}>

                            <ProdutoImagem
                                src={produto.imagem}
                                alt={produto.alt}
                            />

                            <ProdutoInfo>

                                <ProdutoTitulo>{produto.nome}</ProdutoTitulo>

                                <ProdutoDescricao>{produto.descricao}</ProdutoDescricao>

                                <ProdutoPreco>{produto.preco}</ProdutoPreco>

                                <ProdutoBotao>{produto.botao}</ProdutoBotao>

                            </ProdutoInfo>
                        </ProdutoCartao>
                    )
                })}
            </ProdutosWrapper>

        </ProdutosContainer>
    )
}

export default Produtos
