import { Injectable } from '@angular/core';
import { Produto } from '../model/produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    public produtos: Array<Produto> = [
        {
            id: 1,
            nome: 'feijão',
            preco: 10.50,
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQFNsF06Bb2-tBWC6H23KMiUmSMDZ4CvZgQ&usqp=CAU',
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore vel odit error suscipit corporis modi necessitatibus praesentium explicabo fugit.'
        },
        {
            id: 2,
            nome: 'arroz',
            preco: 25.66,
            foto: 'https://img.itdg.com.br/tdg/images/recipes/000/166/751/357546/357546_original.jpg?mode=crop&width=710&height=400',
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore vel odit error suscipit corporis modi necessitatibus praesentium explicabo fugit.'
        },
        {
            id: 3,
            nome: 'açúcar',
            preco: 20.12,
            foto: 'https://content.paodeacucar.com/wp-content/uploads/2018/10/tipos-de-a%C3%A7%C3%BAcar-capa.jpg',
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore vel odit error suscipit corporis modi necessitatibus praesentium explicabo fugit.'
        },
        {
            id: 4,
            nome: 'Iogurte',
            preco: 10.99,
            foto: 'https://www.itambe.com.br/portal/Images/Produto/3ditambebandejamorango540gpersp_full.png',
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore vel odit error suscipit corporis modi necessitatibus praesentium explicabo fugit.'
        },
        {
            id: 5,
            nome: 'Leite',
            preco: 6.99,
            foto: 'https://alimentesebem.sesisp.org.br/app/uploads/2021/07/26443_Leite-faz-mal-a-saude_BANNER_Alimentacao-Saudavel-729x410.png',
            descricao: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore vel odit error suscipit corporis modi necessitatibus praesentium explicabo fugit.'
        }
    ];



    constructor() {

    }

    public adicionar(novo: Produto) {
        const id = this.produtos.length+1;
        novo.id = id;
        this.produtos.push(novo);
    }

    public obterTodos() {
        return this.produtos;
    }


    public obter(codigo: number): Produto {
        for (let item of this.produtos) {
            if (item.id === codigo) {
                return item;
            }
        }

        return {
            id: 0,
            nome: '',
            preco: 0,
            foto: '',
            descricao: ''
        };
    }
}