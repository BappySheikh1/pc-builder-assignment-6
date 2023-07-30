import ProductsCard from "@/component/Card";
import { getProductsCatagoriSuccess } from "@/redux/features/productCategory/productCategorySlice";
import { useAppDispatch } from "@/redux/hook";
import { useEffect } from "react";

const { default: RootLayout } = require("@/component/Layouts/RootLayout");

const HomePage = ({ products }) => {
  // console.log(products);
  const randomSixProducts = products?.data.slice(0, 6);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products) {
      dispatch(getProductsCatagoriSuccess(products.data));
    }
  }, [dispatch, products]);

  return (
    <>
      <div className="container mx-auto my-14">
        <div className="text-center">
          <h1 className="text-4xl my-3">Featured Products</h1>
          <p>Check & Get Your Desired Product!</p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  justify-items-center my-10">
          {randomSixProducts.map((product) => (
            <ProductsCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`https://pc-bd.vercel.app/api/v1/product/?limit=100`);
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
