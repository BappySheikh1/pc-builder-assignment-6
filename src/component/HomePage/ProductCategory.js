import React from 'react';
import ProductCardCategoryPage from './ProductCardCategory';

const ProductCategoryHomePage = () => {

    const computerComponents = [
        "CPU",
        "Motherboard",
        "RAM",
        "PowerSupplyUnit",
        "StorageDevice",
        "Monitor",
   ];

    return (
        <div className="container mx-auto min-h-[50vh] p-2">
        <div className="text-center">
             <h1 className="text-2xl my-4">Featured Category</h1>
             <p className="mb-4">Get Your Desired Product from Featured Category!</p>
        </div>
        <div className="">
             <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  {computerComponents.map((category, i) => (
                       <ProductCardCategoryPage category={category} key={i} />
                  ))}
             </div>
        </div>
   </div>
    );
};

export default ProductCategoryHomePage;