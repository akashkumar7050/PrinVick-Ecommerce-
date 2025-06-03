import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import blog1 from "./Images/img1.jpeg";
import blog2 from "./Images/img2.jpeg";
import blog3 from "./Images/img3.jpeg";
import blog4 from "./Images/img4.jpeg";
import blog5 from "./Images/img5.jpeg";
import blog6 from "./Images/img6.jpeg";

const Blog = () => {
    const navigate = useNavigate();

    const blogs = [
        {
            title: "Top Summer T-Shirts You Need ☀️",
            image: blog1,
            summary: "Discover our trending summer collection — light, breathable, and bold.",
            date: "May 30, 2025",
            author: "Team Prinvick"
        },
        {
            title: "How We Design Our Prints 🎨",
            image: blog2,
            summary: "An inside look at the creative process behind every Prinvick tee.",
            date: "May 25, 2025",
            author: "Creative Studio"
        },
        {
            title: "T-Shirt Style Guide 2025 🔥",
            image: blog3,
            summary: "Explore ways to wear your t-shirts for different moods and looks.",
            date: "May 22, 2025",
            author: "Prinvick Editors"
        },
        {
            title: "Why Fabric Quality Matters 🧵",
            image: blog4,
            summary: "Comfort, durability, and style — the real reasons we choose premium cotton.",
            date: "May 18, 2025",
            author: "Fabric Team"
        },
        {
            title: "Customer Spotlight 🌟",
            image: blog5,
            summary: "See how Prinvick lovers are styling their tees across the country!",
            date: "May 15, 2025",
            author: "Community"
        },
        {
            title: "Care Tips for Long-Lasting Prints 🧼",
            image: blog6,
            summary: "Easy ways to keep your t-shirts fresh, vibrant, and long-lasting.",
            date: "May 10, 2025",
            author: "Support Team"
        },
    ];

    const openBlog = (blog) => {
        navigate("/singleblog", { state: blog });
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 px-4 py-10">
            {blogs.map((blog, index) => (
                <div
                    key={index}
                    className="flex-grow basis-[260px] max-w-[340px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-4 cursor-pointer"
                    onClick={() => openBlog(blog)}
                >
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover object-center rounded-t-2xl" />
                    <div className="p-4 flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
                        <p className="text-sm text-gray-600">{blog.summary}</p>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-xs text-gray-500">{blog.date} • {blog.author}</p>
                            <FontAwesomeIcon icon={faPenNib} className="text-orange-700 text-base" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;
