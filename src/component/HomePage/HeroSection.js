import Image from 'next/image';
import banner from '../../assets/homeimf.png';

const HeroSectionHome = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
             <Image src={banner} alt=''className="max-w-sm rounded-lg" />
             <div>
                  <h1 className="text-5xl font-bold">Best Laptop Shop in Bangladesh!</h1>
                  <p className="py-6">Leading Computer, Laptop & Gaming PC Retail & Online Shop in Bangladesh</p>
                  <button className="btn btn-primary">Get Started</button>
             </div>
        </div>
   </div>
    );
};

export default HeroSectionHome;