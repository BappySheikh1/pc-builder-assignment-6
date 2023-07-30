
import Link from 'next/link';
import React from 'react';

const ProductsCard = ({product}) => {
    return (
        <div>
        <div className="card h-full border bg-white shadow-xl">
             <figure><img src={product.image} alt="picture" /></figure>
             <div className="card-body">
                  <h2 className="card-title">{product.productName}</h2>
                  <p className="text-2xl font-bold">Price : ${product.price}</p>
                  <h3 className="text-1xl">Category : {product.category}</h3>
                  <div className="flex my-3 ">
                       <p className="font-semibold">{product.status}</p>
                       <p className="font-bold">{product.individualRating}</p>
                  </div>
                  <div className="card-actions  ">
                       <Link href={`/detail/${product._id}`} className="btn btn-primary w-full text-white">Buy Now</Link>
                       {/* <button className="btn btn-accent">Accent</button> */}
                  </div>
             </div>
        </div>
   </div>
    );
};

export default ProductsCard;