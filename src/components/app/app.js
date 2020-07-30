import React, {Component} from 'react';

import "./app.css";

import ProductList from '../product-list/';
import SearchPanel from '../search-panel/';
import ProductService from '../../services/product-service';

export default class App extends Component{

    state={
        products:[],
        term:''
    }

    componentDidMount(){
        const productService = new ProductService();
        productService.getProducts().then(data=>{
            this.setState({
                products:data.products
            })
        });
    }
    search(products,term){
        if(term.length===0){
            return products;
        }
        return products.filter((item)=>{
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    onSearchChange = (term) =>{
        this.setState({term});
    }

    render(){
        const {products,term} = this.state;
        const visibleProducts=this.search(products,term);
        return (
        <div className='app'>
            <ProductList products={visibleProducts}/>
            <SearchPanel onSearchChange={this.onSearchChange}/>
        </div>
        );
    }
}
