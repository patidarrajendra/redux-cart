import React from 'react'

function Home(props) {
    console.warn("Home", props.data)
  return (
    <div>
      
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className='img-wrapper item'>
                <img src="https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/I-Kall-Metal-Flip-Phone-K60-o1.jpg" />
            </div>
            <div className='img-wrapper item'>
               <span>
                   I-phone
               </span>
               <span>
                   Price: $1000.00
               </span>
            </div>
            <div className='img-wrapper item'>
                <button onClick={
                    ()=>props.addTOCartHandler(
                        {price:1000,name:'i-phone 11'})}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home
