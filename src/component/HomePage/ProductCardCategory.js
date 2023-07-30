import Link from "next/link";


const ProductCardCategoryPage = ({ category }) => {
    return (
        <div className="card w-48 md:w-52 text-center bg-base-100 shadow-xl image-full">
             {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
             <div className="card-body">
                  <Link href={`/prodact/${category}`} className="">{category}</Link>
                  {/* <div className="card-actions justify-end">
                       <button className="btn btn-primary">Buy Now</button>
                  </div> */}
             </div>
        </div>
   );
};

export default ProductCardCategoryPage;