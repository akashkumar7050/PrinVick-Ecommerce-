import Footer from "./Footer"

const About = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Prinvick 👕</h1>
      
      <p className="text-lg text-gray-600 mb-8 text-center">
        Welcome to <span className="font-semibold text-gray-800">Prinvick</span> – Where Your Style Speaks Louder Than Words.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">🌟 Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Prinvick is a modern t-shirt brand built for the new generation. We blend high-quality fabrics with original, trend-forward designs to bring you streetwear that feels as good as it looks. Every print, color, and cut is made with passion, purpose, and your everyday lifestyle in mind.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">👕 What We Offer</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li><span className="font-medium text-gray-800">Unique Designs:</span> From graphic prints to classic essentials</li>
          <li><span className="font-medium text-gray-800">Comfort-First Approach:</span> Soft, breathable, and lasting materials</li>
          <li><span className="font-medium text-gray-800">Regular Drops:</span> Fresh arrivals and exclusive limited editions</li>
          <li><span className="font-medium text-gray-800">Affordable Luxury:</span> High-end style, pocket-friendly prices</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">🌍 Why Prinvick</h2>
        <p className="text-gray-600 leading-relaxed">
          We’re not just selling t-shirts—we’re building a style community. Whether you're dressing for casual days, creative moods, or just looking to elevate your daily wear, Prinvick helps you stand out without trying too hard.
        </p>
      </section>

      <div className="text-center text-gray-700 mb-6">
        🚚 <span className="font-semibold">Fast Shipping</span> | 🔄 <span className="font-semibold">Easy Returns</span> | 💬 <span className="font-semibold">24/7 Support</span>
      </div>

      <p className="text-center text-xl font-semibold text-gray-800 italic">
        Style it. Print it. Live it — with <span className="text-indigo-600">Prinvick.</span>
      </p>
    </div>
      <Footer/>
    </>
  );
};

export default About;
