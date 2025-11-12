import React from 'react';
import Categories from '../CategoriesSection/Categories/Categories';
import FilterByPrice from '../CategoriesSection/FilterByPrice/FilterByPrice';
import NewProducts from '../NewProducts/NewProducts';

const RightPart = ({categories,sections}) => {
    return (
        <div>
            <Categories categories={categories}></Categories>
            <FilterByPrice></FilterByPrice>
            <NewProducts sections={sections}></NewProducts>
        </div>
    );
};

export default RightPart;