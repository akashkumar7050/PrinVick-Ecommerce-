import { useState } from "react";
import { Context } from "./Context";



const ContextProvider = (props) => {
    const [item , setItem] = useState([])
  return (
<Context.Provider value={{item , setItem}}>
    {props.children}
</Context.Provider>
  )
}

export default ContextProvider