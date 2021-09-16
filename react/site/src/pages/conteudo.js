
import Cabecalho from '././componentes/cabecalho'
import Menu from '././componentes/menu'

import { Container, Conteudo } from './styled'

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import React, { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from 'react';

import Api from '../../src/services/Api';
const api = new Api();

export default function Index() {

    const [produtos, setProdutos ] = useState([]);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [precoDe, setPrecoDe] = useState('');
    const [precoPor, setPrecoPor] = useState('');
    const [estoque, setEstoque] = useState('');
    const [imagem, setImagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idAlterado, setIdAlterado] = useState(0);

    const loading = useRef(null)
    
    async function listarProdutos() {
        loading.current.continuousStart();
        const a = await api.listarProdutos();
        setProdutos(a);
        loading.current.complete()
    }

    const ValidarResposta = (x) => {
        console.log(x)
        if (!x.erro)
            return true;
            toast.error(`${x.erro}`)

        return false;

    }
    async function inserir() {

        loading.current.continuousStart();

        let a = nome === '' || categoria === '' || avaliacao === '' || precoDe === '' || precoPor === '' || estoque === '' || imagem === '' || descricao === ''
        let isnumber = isNaN(precoPor) === true || isNaN(precoDe) === true || isNaN(avaliacao) === true || isNaN(estoque) === true
        let Negativos = precoPor < 0  || precoDe < 0 || avaliacao < 0 || estoque < 0


        if(a === true ) {
            toast.error('Todos os campos devem estar preenchidos!'); 
            loading.current.complete()
        }
        else if (isnumber === true) {
            toast.error('Os campos Preço POR, Preço DE, Avaliação e Estoque devem ser números!'); 
            loading.current.complete()
        }
        else if (Negativos === true) {
            toast.error('Os campos Preço POR, Preço DE, Avaliação e Estoque devem receber números positivos!'); 
            loading.current.complete()
        }
        else if (idAlterado === 0) {
            let x = await api.inserirProdutos(nome,categoria,precoDe,precoPor,avaliacao,estoque,descricao,imagem)

            if (!ValidarResposta(x)){
                return  
            }   

            toast.success('Produto Adicionado')   
            listarProdutos();
            LimparCampos() 
            loading.current.complete()
        } 

        else if (idAlterado !== 0){

            let x = await api.alterarProduto(idAlterado,nome,categoria,precoDe,precoPor,avaliacao,estoque,descricao,imagem)
            
            if (!ValidarResposta(x)){
                return  
            }   

            console.log(x)
            toast.success('Produto Editado');
            listarProdutos()
            LimparCampos()
            loading.current.complete()
        }

    }

    async function remover(id) {
        let a = await api.removerProduto(id)
        listarProdutos();
        console.log(a) 
    }

    async function RemoverFinal(id) {
        confirmAlert({
            title: 'Deseja deletar esse Produto?',
            message: `Você tem certeza de remover Produto ${id} ?`,
            buttons: [
              {
                label: 'Sim',
                onClick: (a = remover(id)) => toast.warn('Produto Removido')
              },
              {
                label: 'Não',
                onClick: (a = api.listarProdutos()) => toast.success('Produto Mantido')
              }
            ]
        });
    }

    async function editar(item) {
        setNome(item.nm_produto);
        setCategoria(item.ds_categoria);
        setAvaliacao(item.vl_avaliacao);
        setPrecoDe(item.vl_preco_de);
        setPrecoPor(item.vl_preco_por);
        setEstoque(item.qtd_estoque);
        setImagem(item.img_produto);
        setDescricao(item.ds_produto);
        setIdAlterado(item.id_produto);
    }

    function LimparCampos() {
        setNome('');
        setCategoria('');
        setAvaliacao('');
        setPrecoDe('');
        setPrecoPor('');
        setEstoque('');
        setImagem('');
        setDescricao('');
        setIdAlterado(0);
    }

    useEffect(() => {
        listarProdutos();
    }, [])



return (
    

    <Container>
    <ToastContainer />
        <Menu />
        <Conteudo >
            <Cabecalho />
            <LoadingBar color='#f11946' ref={loading} />
                    <div class="body-right-box">
                        <div class="new-product-box">
                                <div class="text-new-product">
                                    <div class="bar-new-product"></div>
                                    <div class="text-new-product">{idAlterado === 0 ? "Novo Produto" : "Alterando Produto: " + idAlterado}</div>
                                </div>

                                <div class="input-new-product"> 
                                    
                                    <div class="input-left">
                                        <div class="agp-input"> 
                                            
                                            <label> Nome: </label>  
                                            <div class="input"> <input type="text" value={ nome } onChange={e => setNome(e.target.value)} /> </div>  
                                        </div>

                                        <div class="agp-input">
                                            <label> Categoria: </label>  
                                            <div class="input"> <input type="text" value={ categoria } onChange={e => setCategoria(e.target.value)} /> </div> 
                                        </div>

                                        <div class="agp-input">
                                            <label> Avaliação </label>  
                                            <div class="input"> <input type="text" value={ avaliacao } onChange={e => setAvaliacao(e.target.value)} /> </div> 
                                        </div>
                                    </div>    

                                    <div class="input-right">
                                        <div class="agp-input">
                                            <label> Preço DE: </label>  
                                            <div class="input"> <input type="text" value={ precoDe } onChange={e => setPrecoDe(e.target.value)} /> </div>  
                                        </div>

                                        <div class="agp-input">
                                            <label> Preço POR: </label>  
                                            <div class="input"> <input type="text" value={ precoPor } onChange={e => setPrecoPor(e.target.value)} /> </div> 
                                        </div>

                                        <div class="agp-input">
                                            <label> Estoque: </label>  
                                            <div class="input"> <input type="text" value={ estoque } onChange={e => setEstoque(e.target.value)}/> </div>
                                        </div> 
                                    </div>
                                </div>


                                <div class="agp-textarea">
                                    <div class="link-image">
                                        <label class="namelabel"> Link Imagem: </label>  
                                        <div class="input-2"> <input type="text" value={ imagem } onChange={e => setImagem(e.target.value)} /> </div>  
                                    </div>

                                    <div class="desc">
                                        <label> Descrição: </label>
                                        <div class="textare"> <textarea name="" id="" cols="92" rows="10" type="text" value={ descricao } onChange={e => setDescricao(e.target.value)} > </textarea></div>

                                        <div class="button-create"> <button onClick={ inserir } > {idAlterado === 0 ? "Cadastrado" : "Alterar"} </button> </div>
                                    </div>
                                </div>
                            </div>

                            <div class="product-registered-box">
                            <div class="row-bar"> 
                                <div class= "bar-new-product"> </div>
                                <div class="text-registered-product"> Produtos Cadastrados </div>
                            </div>

                                <table class ="table-user">
                                    <thead>
                                        <tr>
                                            <th class="a"> </th>
                                            <th > ID </th>
                                            <th> Produto </th>
                                            <th> Categoria </th>
                                            <th> Preço </th>
                                            <th> Estoque </th>
                                            <th class="a"> </th>
                                            <th class="a"> </th>
                                        </tr>
                                    </thead>



                                    
                                        <tbody>

                                        {produtos.map((item, i) =>
                                         
                                         
                                            <tr className = { i % 2  === 0 ? "linha-alternada" : ""}>
                                        
                                                <td> <img src={item.img_produto} alt="" style={{width: "50px", height:"50px"}}/> </td>
                                                <td> {item.id_produto} </td>
                                                <td title={item.nm_produto}>
                                                    {item.nm_produto != null && item.nm_produto.length >= 25 
                                                    ? item.nm_produto.substr(0,25) + '...'
                                                    : item.nm_produto}
                                                </td>
                                                <td> {item.ds_categoria} </td>
                                                <td> {item.vl_preco_por} </td>
                                                <td > {item.qtd_estoque} </td>
                                                <td class = "aa"> <button onClick={() => editar(item)} > <img src="/assets/images/editar.svg" alt="" /> </button> </td>
                                                <td class = "aa">  <button onClick={() => RemoverFinal(item.id_produto)} > <img src="/assets/images/trash.svg" alt="" /> </button> </td>

                                            </tr> 
                                        )}  

                                        </tbody> 

                                        
                                </table>
                        </div>
                    </div>
            </Conteudo>
        </Container>
    )
}