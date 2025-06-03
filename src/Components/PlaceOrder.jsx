import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  const handleOrder = () => {
    if (!address.trim()) {
      alert("Please enter your address.");
      return;
    }
    alert("Order placed successfully!");
    navigate("/order-confirmation");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Shipping Address</label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded-md"
          rows="4"
          placeholder="Enter your full address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Payment Method</label>
        <select
          className="w-full border border-gray-300 p-2 rounded-md"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit/Debit Card</option>
        </select>
      </div>

      {paymentMethod === "card" && (
        <div className="mb-4">
          <label className="block font-medium mb-1">Card Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="1234 5678 9012 3456"
          />
        </div>
      )}

      <button
        className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700 transition"
        onClick={handleOrder}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
