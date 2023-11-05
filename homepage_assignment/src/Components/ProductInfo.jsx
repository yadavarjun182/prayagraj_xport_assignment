import React, { useRef, useEffect } from 'react'
import "./ProductInfo.css";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
// import { Power3 } from 'gsap/gsap-core';


gsap.registerPlugin(Flip);

<style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Nunito&display=swap');
</style>
const ProductInfo = () => {
    let logoItem = useRef(null)

    useEffect(() => {
        gsap.to(logoItem, {
            x: 900,
            duration: 2,
            // delay: 2
        })
     

    }, [])

   

    return (
        <>
            <div class="image-left">
                <img ref={el => { logoItem = el }} src="/leftchip.jpg" alt="bowl of chips" />
                <div>
                    <h1>Liking us is easy, crunching is too.</h1>

                </div>
            </div>

            <div class="image-right">
                <img src="/rightchip.jpg" alt="packet of chips" />
                <div>
                    <h1>Liking us is easy, crunching is too.</h1>
                </div>
            </div>
        </>
    )
}

export default ProductInfo