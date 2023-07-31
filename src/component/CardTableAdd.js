/* eslint-disable @next/next/no-img-element */
const CardTableAdd = ({ product }) => {
    const { image, productName, price } = product;
    return (
      <>
        <div className="w-full flex gap-3">
          <div>
            <img className="w-14" src={image} alt="" />
          </div>
          <div>
            <p>{productName}</p>
            <p className="text-xl font-semibold">${price}</p>
          </div>
        </div>
      </>
    );
  };
  
  export default CardTableAdd;
  