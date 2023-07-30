import ProductsCard from "@/component/Card";
import RootLayout from "@/component/Layouts/RootLayout";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/router";

const ProductCategory = () => {
  // Dummy array of products for testing
  const dummyProducts = [
    { _id: 1, category: "Category1", productName: "Product1" },
    { _id: 2, category: "Category2", productName: "Product2" },
    { _id: 3, category: "Category1", productName: "Product3" },
    // Add more dummy products as needed
  ];

  const { products } = useAppSelector((state) => state.productsCategory);
  console.log("category Products", products);
  const router = useRouter();

  const filteredProducts = products.length > 0
  ? products.filter((product) => product.category === router.query.category)
  : dummyProducts.filter((product) => product.category === router.query.category);

  return (
    <div className="container mx-auto my-14">
      <div className="text-center">
        <h1 className="text-4xl my-3">Featured Products</h1>
        <p>Check & Get Your Desired Product!</p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center my-10">
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
