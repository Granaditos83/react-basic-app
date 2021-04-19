import React from 'react';
import ProductTable from '../Product-Table/product-table.comp';
import SearchBar from '../search-bar/search-bar.comp';
import './Filterable-Product-Table.style.css';




 const FilterableProductTable = () => {
    return (
      

      <div className= "Filterable-Product-Table-container">
          <SearchBar/>
          <ProductTable/>
          
        

      </div>
     
      )
    
}
export default FilterableProductTable;