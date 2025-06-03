import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Login from "./Components/Login"
import Cart from "./Components/Cart"
import Shopnow from "./Components/Shopnow"
import Singlepage from "./Components/Singlepage"
import PlaceOrder from "./Components/PlaceOrder"
import NotFound from "./Components/NotFound"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Home /></>,
      // children:[

      // ]

    },
    {
      path: "/shopnow",
      element: <>
        <Navbar />
        <Shopnow /></>
    },
    {
      path: "/singlepage",
      element: <>
        <Navbar />
        <Singlepage /></>
    },
    {
      path: "/about",
      element: <><Navbar />
        <About /></>

    },
    {
      path: "/blog",
      element: <><Navbar />
        <Blog /></>

    },
    {
      path: "/login",
      element: <><Navbar />
        <Login /></>

    },
    {
      path: "/cart",
      element: <><Navbar />
        <Cart /></>

    },
    {
      path: "/placeorder",
      element: <><Navbar />
        < PlaceOrder/></>

    },
    {
      path: "*",
      element: <><NotFound />
       </>

    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
