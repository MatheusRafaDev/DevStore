import axios from 'axios'
const api = axios.create({
    baseURL: 'https://devstorezap.herokuapp.com/'
})

export default class Api {
    
    async listarProdutos() {
        let r = await api.get(`/produto`)
        return r.data;
    }

    async inserirProdutos(nome,categoria,precoDe,precoPor,avaliacao,estoque,descricao,imagem) {

        let produtos = {
             nm_produto: nome,
             ds_categoria: categoria,
             vl_preco_de: precoDe,
             vl_preco_por: precoPor, 
             vl_avaliacao: avaliacao,
             qtd_estoque: estoque,
             ds_produto: descricao,
             img_produto: imagem,
             bt_ativo: true,
             dt_inclusao: new Date()
        }
        
        let r = await api.post(`/produto`, produtos);
        return r.data;
    }

    async removerProduto(id) {
        let r = await api.delete(`/produto/${id}`)
        return r.data;
    }

    async alterarProduto(id ,nm_produto, ds_categoria, vl_preco_de, vl_preco_por, vl_avaliacao, qtd_estoque , ds_produto,img_produto) {


        let produtos = {
            nm_produto: nm_produto,
            ds_categoria: ds_categoria,
            vl_preco_de: vl_preco_de,
            vl_preco_por: vl_preco_por, 
            vl_avaliacao: vl_avaliacao,
            ds_produto: ds_produto,
            qtd_estoque: qtd_estoque,
            img_produto: img_produto
        }

        console.log(produtos)

        let r = await api.put(`/produto/${id}`, produtos)
        return r.data;
    }
   
}
