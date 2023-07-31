/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Card = ({ product }) => {
    console.log(product);
     // const { image, productName, category, status, price, individualRating , _id } = prodct
     return (
          <div>
            <div className="card  border bg-white shadow-xl">
              <figure>
                <img src={product.image} alt="picture" className="h-[200px] w-full" />
              </figure>
              <div className="card-body h-[300px]">
                <h2 className="card-title">{product.productName}</h2>
                <p className=" font-bold">Price : ${product.price}</p>
                <h3 className="font-semibold">Category : {product.category}</h3>
                <div className="flex ">
                  <p className="font-semibold">{product.status}</p>
                  <p className="font-bold">{product.individualRating}</p>
                </div>
                <div className="card-actions mt-2 ">
                  <Link
                    href={`/detail/${product._id}`}
                    className="btn btn-success mx-auto text-white"
                  >
                    product detail
                  </Link>
                  {/* <button className="btn btn-accent">Accent</button> */}
                </div>
              </div>
            </div>
          </div>
        );
};

export default Card;