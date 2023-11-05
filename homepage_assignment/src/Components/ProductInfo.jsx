import React from 'react'
import "./ProductInfo.css";
// import {gsap} from 'gsap';

<style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Nunito&display=swap');
</style>
const ProductInfo = () => {
    return (
        <>
            <div class="image-left">
                <img src="/leftchip.jpg" alt="bowl of chips" />
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