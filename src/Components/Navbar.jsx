import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import UseContext from '../UseContext/UseContext';

const Navbar = () => {
    const cart = UseContext();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? "text-orange-700 font-semibold border-b-2 border-orange-700"
            : "hover:text-orange-700 transition-all duration-200";

    return (
<nav className="bg-gray-100 shadow-md sticky top-0 z-50 font-[Nunito]">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    <div className="text-2xl font-bold text-orange-700">PrinVick</div>

    <div className="hidden lg:flex items-center gap-8">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/about" className={navLinkClass}>About</NavLink>
      <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
    </div>

    <div className="hidden lg:flex items-center gap-6">
      <NavLink to="/login" className={navLinkClass}>Login</NavLink>
      <NavLink to="/cart" className="relative">
        <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-gray-700 hover:text-orange-700 transition" />
        {cart.item.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
            {cart.item.length}
          </span>
        )}
      </NavLink>
    </div>

    <div className="lg:hidden text-2xl text-gray-700 cursor-pointer" onClick={toggleMenu}>
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
    </div>
  </div>

  {/* Mobile menu with absolute position */}
  {isOpen && (
    <div className="lg:hidden absolute w-full bg-gray-100 border-t border-gray-300 px-4 pb-4 flex flex-col gap-3 font-medium text-gray-700 z-40 top-[64px]">
      <NavLink to="/" onClick={toggleMenu} className={navLinkClass}>Home</NavLink>
      <NavLink to="/about" onClick={toggleMenu} className={navLinkClass}>About</NavLink>
      <NavLink to="/blog" onClick={toggleMenu} className={navLinkClass}>Blog</NavLink>
      <hr className="my-1 border-gray-300" />
      <NavLink to="/login" onClick={toggleMenu} className={navLinkClass}>Login</NavLink>
      <NavLink to="/cart" onClick={toggleMenu} className="relative w-fit">
        <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
        {cart.item.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
            {cart.item.length}
          </span>
        )}
      </NavLink>
    </div>
  )}
</nav>


    );
};

export default Navbar;
