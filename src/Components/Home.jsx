import Itemlist from './Itemlist';
import Footer from './Footer';
import Bgimage from "./Images/Bgimage.jpg";
import img1 from "./Images/img1.jpeg";
import img2 from "./Images/img2.jpeg";
import img3 from "./Images/img3.jpeg";
import img4 from "./Images/img4.jpeg";
import img5 from "./Images/img5.jpeg";
import img6 from "./Images/img6.jpeg";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate();

  function shop() {
    navigate("/shopnow");
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        style={{ backgroundImage: `url(${Bgimage})` }}
        className="h-[400px] bg-cover bg-center flex items-center justify-center px-4 text-center"
      >
        <div className="max-w-3xl space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-bold font-[Nunito]">
            Welcome To <span className="text-orange-800">PrinVick</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 font-semibold">
            T-Shirts For Modern Man
          </h2>
          <button
            onClick={shop}
            className="px-6 py-2 bg-orange-800 text-white font-semibold rounded-lg text-lg shadow-md hover:bg-orange-700 transition duration-200"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Categories */}
      <section className="py-8 px-4">
        <h2 className="text-4xl md:text-5xl text-orange-800 font-bold font-[Nunito] text-center mb-8">
          Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <div
              key={index}
              className="h-[280px] w-full bg-cover bg-center rounded-xl shadow-md"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </section>

      {/* Item List */}
      <h1 className="text-4xl md:text-5xl text-orange-800 font-bold font-[Nunito] text-center mt-10 mb-4">
        Item List
      </h1>

      <Itemlist />
      <Footer />
    </>
  );
};

export default Home;
