import React from 'react'
import './Home.css'

import Product from './Product'
function Home() {
    return (
        <div className='home'>

            <img className="home__image" src="https://m.media-amazon.com/images/I/71DM0VoXW2L._SX3000_.jpg" alt="" srcset="" />


            <div className="home__row">
                <Product

                    id="1234"
                    title="Tomb Raider (Bilingual) [Blu-Ray]"
                    price={17.85}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/919eReai4qL._AC_SX569_.jpg"
                ></Product>

                <Product

                    id="1222"
                    title="Google Pixel 8 Pro - 128GB - Porcelain"
                    price={1349.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71zda5N33KL._AC_SX679_.jpg://m.media-amazon.com/images/I/71zda5N33KL._AC_SX679_.jpg"
                ></Product>
            </div>


            <div className="home__row">
                <Product

                    id="1221"
                    title="Meta Quest 3 128GB — Breakthrough Mixed Reality"
                    price={649.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/81whTB488bL._AC_SX679_.jpg"
                ></Product>

                <Product

                    id="1235"
                    title="Pixel Buds Pro - Charcoal"
                    price={225.34}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61DGBXMDMpL._AC_SX679_.jpg"
                ></Product>

                <Product

                    id="1236"
                    title="Fruit of the Loom Mens Eversoft Fleece Hoodies"
                    price={22.64}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71h2MZlZgLL._AC_SY879_.jpg"
                ></Product>
            </div>


            <div className="home__row">
                <Product

                    id="1237"
                    title="Google Pixel Watch 2 - WiFi - Black/Black"
                    price={479}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61D1ooAQ+qL._AC_SX679_.jpg"
                ></Product>
            </div>
        </div>
    )
}

export default Home
