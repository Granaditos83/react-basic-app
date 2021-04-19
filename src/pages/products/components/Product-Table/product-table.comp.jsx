import React from 'react';
import ProductsCategoryRow from '../products-category-row/products-category-row.comp';
import ProductRow from '../product-row/product-row.comp';
import ProductRowDos from '../product-row-dos/product-row-dos.comp';


import './product-table.style.css';
import ProductRowTres from '../product-row-tres/product-row-tres.comp';
import ProductRowCuatro from '../product-row-cuatro/product-row-cuatro.comp';
import ProductRowCinco from '../product-row-cinco/product-row-cinco.comp';
import ProductRowSeis from '../product-row-seis/product-row-seis.comp';



 const ProductTable = () => {
    return (
      

      <div className= "product-table-container">
        name          price
        <ProductsCategoryRow/>
        <ProductRow/>
        <ProductRowDos/>
        <ProductRowTres/>
        <ProductRowCuatro/>
        <ProductRowCinco/>
        <ProductRowSeis/>
        



       
     
        

      </div>
     
      );
    
}
export default ProductTable ;