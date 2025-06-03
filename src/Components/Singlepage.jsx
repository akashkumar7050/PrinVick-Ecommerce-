import img1 from "./Images/img4.jpeg";
// import img2 from "./Images/img2.jpeg";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import Itemlist from "./Itemlist";
import Footer from "./Footer"


const Singlepage = () => {
    const location = useLocation()
    const product = location.state
    const [image, setImage] = useState(product?.link || img1);

    function handleImage(img) {
        setImage(img);
    }

    useEffect(() => {
        if (product?.link) {
            setImage(product.link);
        }
    }, [product]);


    return (<>
        <div className="flex justify-around m-4">
            {/* Left Section */}
            <div className="w-[30%] bg-gray-400 max-w-max flex justify-center gap-4 p-4 rounded-md h-[500px]">
                {product && (
                    <div className="flex flex-col gap-2 h-full">
                        {product.images.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                onClick={() => handleImage(item)}
                                className="h-24 w-22 cursor-pointer rounded-md"
                            />
                        ))}
                    </div>
                )}


                {/* Main Image + Buttons */}
                <div className="flex flex-col justify-between items-center h-full w-[90%]">
                    <img src={image} className="h-[85%] w-full object-contain rounded-lg" />

                    {/* Buttons */}
                    <div className="flex gap-4 mt-4 mr-8">
                        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 cursor-pointer">Add to Cart</button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Right Section (Optional) */}
            <div>
                {/* Right Section */}
                <div className="w-[60%] px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{product?.Name}</h1>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-500 text-lg">★★★★☆</span>
                        <span className="text-sm text-gray-600">(245 ratings)</span>
                    </div>

                    <p className="text-xl font-semibold text-green-600 mb-2">{product?.price}</p>

                    <p className="text-sm text-gray-700 mb-4">
                        This premium quality polo t-shirt is made with 100% cotton, ensuring all-day comfort and style.
                        Perfect for casual or semi-formal occasions.
                    </p>

                    {/* Size Options */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Select Size:</h3>
                        <div className="flex gap-3">
                            {['S', 'M', 'L', 'XL'].map(size => (
                                <button key={size} className="border px-3 py-1 rounded hover:bg-gray-100">{size}</button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-1">Quantity:</h3>
                        <input type="number" min="1" defaultValue="1" className="w-16 px-2 py-1 border rounded" />
                    </div>

                    {/* Stock Status */}
                    <p className="text-sm text-green-700 mb-4">In Stock</p>

                    {/* Buttons (optional here if not on left) */}
                    <div className="flex gap-4">
                        <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Add to Cart</button>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
        <h1 className="text-5xl text-orange-800 font-bold font-[Nunito] tracking-wide leading-tight drop-shadow-md animate-fadeIn text-center my-2">
            Item List
        </h1>
        <Itemlist />
        <Footer/>

    </>


    );
};

export default Singlepage;
