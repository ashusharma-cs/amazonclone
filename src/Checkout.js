import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
function Checkout() {


    const [{basket}] = useStateValue();

  return (
    <div className='chackout'>

        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/15/Events/2024/NYNY/Programs/Join_prime_nyny_desktop_en.png" alt="" srcset="" />



        {basket?.length === 0 ?(
            <div>
                <h2>Your Basket is empty</h2>
                <p>you have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
            </div>
        ): (
            <div>
                <h2 className='checkout__title'>Your Shopping Basket</h2>

                {basket.map(item =>{
                    <CheckoutProduct
                        item={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                })}

            </div>
        )}
    </div>
  )
}

export default Checkout
