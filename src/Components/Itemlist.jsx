import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Bgimage from "./Images/Bgimage.jpg"
import img1 from "./Images/img1.jpeg"
import img2 from "./Images/img2.jpeg"
import img3 from "./Images/img3.jpeg"
import img4 from "./Images/img4.jpeg"
import img5 from "./Images/img5.jpeg"
import img6 from "./Images/img6.jpeg"
import UseContext from '../UseContext/UseContext';

const Itemlist = () => {

    const cart = UseContext()
    useEffect(() => {
        console.log("Cart items updated:", cart.item);
    }, [cart.item]);
    // console.log(cart)

    const navigate = useNavigate()


    const items = [
        { Name: "Shirt", link: `${img1}`, price: `$50`, images: [img1, img2, img3, img4] },
        { Name: "Polo T-Shirt", link: `${img2}`, price: `$400`, images: [img1, img2, img3, img4] },
        { Name: "Polo T-Shirt", link: `${img3}`, price: `$149`, images: [img1, img1, img3, img2] },
        { Name: "Polo T-Shirt", link: `${img4}`, price: `$599`, images: [img1, img3, img3, img1] },
        { Name: "Polo T-Shirt", link: `${img5}`, price: `$699`, images: [img1, img4, img3, img5] },
        { Name: "Polo T-Shirt", link: `${img6}`, price: `$999`, images: [img1, img5, img3, img3] },
        { Name: "Polo T-Shirt", link: `${Bgimage}`, price: `$999`, images: [img1, img2, img3, img4] },
    ]



    function singlePage(item) {
        navigate("/singlepage", { state: item })
    }

    return (
        <div className="flex flex-wrap justify-center gap-4"   >
            {items && items.map((item, i) => {
                return (

                    <div className="flex-grow basis-[220px] max-w-[300px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-4 cursor-pointer" key={i} >
                        <img src={item.link} alt="Polo T-shirt" className="w-full h-48 object-cover object-center rounded-t-2xl "
                        />
                        <div className="p-3 flex flex-col gap-2" onClick={() => singlePage(item)}>
                            <h2 className="text-base font-semibold text-gray-800">{item.Name}</h2>
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-700 font-medium">{item.price}</p>
                                <button className="text-orange-800 hover:text-orange-600 transition-colors duration-200" onClick={(e) => {
                                    e.stopPropagation()
                                    cart.setItem(prevItems => [...prevItems, item]);
                                    // { console.log(cart.item) }
                                }}>
                                    <FontAwesomeIcon icon={faShoppingCart} className="text-lg cursor-pointer" />

                                </button>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default Itemlist