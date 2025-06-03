import React from 'react'
import Itemlist from './Itemlist'
import Footer from './Footer'
// import { useLocation } from 'react-router-dom'

const Shopnow = () => {
    // const location = useLocation().pathname === "/src/Components/Shopnow"

    return (
        <>
            <div>

                <Itemlist />
                <Footer />

            </div>
        </>
    )

}

export default Shopnow