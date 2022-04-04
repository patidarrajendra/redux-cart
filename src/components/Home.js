import React from 'react'

function Home() {
  return (
    <div>
        <div className='add-to-cart'>
            <img className='' src="https://png2.cleanpng.com/sh/fbbf9e3b1ef2fe7dfc402fa29d221fc0/L0KzQYm3U8I3N5D6j5H0aYP2gLBuTfFuaat0hp9sb32wg7n2kQBqdpgye9N7dD3yfr3wjvUue5l0iOJybnewfLFuj710fJD3fZ98aHXvdn68gfI6PWM3eaU7Mke8Q3A8UsI0OGk3TqMAMkKzSYW9U8QzOGY5RuJ3Zx==/kisspng-amazon-com-shopping-cart-online-shopping-logo-store-shelf-5ab9522a322793.5223082615220946342054.png" />
        </div>
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
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home
