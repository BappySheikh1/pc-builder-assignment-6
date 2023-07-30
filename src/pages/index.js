const { default: RootLayout } = require("@/component/Layouts/RootLayout");

const HomePage = ({ products }) => {
  console.log(products);
  return (
    <>
      <h1 className="text-3xl font-bold">This is assignment 6 project</h1>
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
