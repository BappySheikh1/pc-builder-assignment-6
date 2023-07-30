import Link from "next/link";

const CatagoryCard = ({ category }) => {
     return (
          <div className="card w-48 md:w-52 text-center shadow-xl">
               {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
               <div className="btn ">
                    <Link href={`/product/${category}`} className="">{category}</Link>
                    {/* <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                    </div> */}
               </div>
          </div>
     );
  };


export default CatagoryCard;
