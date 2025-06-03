import UseContext from '../UseContext/UseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = UseContext();
  const place = useNavigate();

  const placeItem = (length) => {
    if (length === 0) {
      alert("Please add items to the cart.");
    } else {
      place("/placeorder");
    }
  };

  const removeItem = (indexToRemove) => {
    cart.setItem(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const totalPrice = cart.item.reduce((acc, curr) => {
    const numericPrice = parseFloat(curr.price.replace(/[^0-9.]/g, '')) || 0;
    return acc + numericPrice;
  }, 0);

  return (
    <>
      <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">

        {/* Container with flex for desktop */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Left: Cart Items */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faShoppingCart} />
              Your Cart
            </h1>

            {cart.item.length === 0 ? (
              <p className="text-gray-600 text-lg text-center">Your cart is empty.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {cart.item.map((product, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <img
                      src={product.link}
                      alt={product.Name}
                      className="w-full h-48 object-cover object-center"
                    />
                    <div className="p-4 flex flex-col justify-between">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-800">{product.Name}</h2>
                      <p className="text-sm text-gray-600 mb-2">{product.price}</p>
                      <button
                        className="text-red-600 hover:text-red-800 font-medium text-sm flex items-center gap-1"
                        onClick={() => removeItem(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Price Summary */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto lg:mx-0 lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Price Details</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{cart.item.length}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total Price</span>
              <span>₹{totalPrice}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-green-700">
              <span>Final Amount</span>
              <span>₹{totalPrice}</span>
            </div>
            <button
              onClick={() => placeItem(cart.item.length)}
              className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition duration-200 shadow-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
