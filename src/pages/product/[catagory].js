import ProductsCard from "@/component/Card";
import RootLayout from "@/component/Layouts/RootLayout";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/router";

const ProductCategory = () => {
  const { products } = useAppSelector((state) => state);
  console.log(products);
  const router = useRouter();

  const filteredProducts = products.filter(
    (product) => product.category === `${router.query.category}`
  );

  return (
    <div className="container mx-auto my-14">
      <div className="text-center">
        <h1 className="text-4xl my-3">Featured Products</h1>
        <p>Check & Get Your Desired Product!</p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-5 gap-4 justify-items-center my-10">
        {filteredProducts.map((product) => (
          <ProductsCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

ProductCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
