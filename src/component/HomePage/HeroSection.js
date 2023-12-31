import Image from "next/image";
import banner from "../../assets/asus-zenbook-14-um425ua-amd-ryzen-5-5500u-14-inch-11664790375.webp"

const HeroSection = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image src={banner} alt="" className=" rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">
            Best Desktop Shop in Bangladesh!
          </h1>
          <p className="py-6">
            Leading Computer, Laptop & Gaming PC Retail & Online Shop in
            Bangladesh
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
