import React from 'react';

import './product-list.css';

import ProductListItem from '../product-list-item/';

const ProductList=({products})=>{
        const elements = products.map((product) => {
            const { name } = product;
            return (
              <li className='product-list-item'>
                <ProductListItem name={name} />
              </li>
            );
          });
       return (<ul className='product-list'>{ elements }</ul>);
}
export default ProductList;