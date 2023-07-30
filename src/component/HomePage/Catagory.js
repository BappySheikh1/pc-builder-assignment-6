import CatagoryCard from "./CatagoryCard";

const CatagoryHome = () => {
     const computerComponents = [
          "CPU",
          "Motherboard",
          "RAM",
          "PowerSupplyUnit",
          "StorageDevice",
          "Monitor",
          "Other"
     ];

     return (
          <div className="container mx-auto min-h-[50vh] p-2">
               <div className="text-center">
                    <h1 className="text-2xl my-4">Featured Category</h1>
                    <p className="mb-4">Get Your Desired Product from Featured Category!</p>
               </div>
               <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-0">
                         {computerComponents.map((category, i) => (
                              <CatagoryCard category={category} key={i} />
                         ))}
                    </div>
               </div>
          </div>

     );
};

export default CatagoryHome;