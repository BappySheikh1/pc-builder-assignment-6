/* eslint-disable @next/next/no-img-element */

import { addToBuild } from "@/redux/features/addToBuild/addToBuildSlice";
import { useAppDispatch } from "@/redux/hook";

const CardTable = ({product , setShowModal}) => {
     const { image, productName,  price } =product 

     const dispatch = useAppDispatch();

     const handelAddToBuild = (product) => {
          dispatch(addToBuild(product))
          setShowModal(false)
     }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */} 
          <tr className="bg-base-200">
            <td><img className="w-14" src={image} alt="" /></td>
            <td>
               <p>{productName}</p>
               <p className="text-xl font-semibold">${price}</p>
            </td>
            <td><button onClick={()=>handelAddToBuild(product)} className="btn btn-primary"> Add to Builder </button></td>
          </tr>
          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default CardTable;
