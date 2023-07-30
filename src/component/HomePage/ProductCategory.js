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
        "Other"
   ];

    return (
        <div className="container mx-auto p-2">
        <div className="text-center">
             <h1 className="text-2xl my-4 font-bold">Featured Category</h1>
             <p className="mb-4 font-semibold">Get Your Desired Product from Featured Category!</p>
        </div>
        <div className="">
             <div className="grid grid-cols-2 md:grid-cols-7 gap-0">
                  {computerComponents.map((category, i) => (
                       <ProductCardCategoryPage category={category} key={i} />
                  ))}
             </div>
        </div>
   </div>
    );
};

export default ProductCategoryHomePage;