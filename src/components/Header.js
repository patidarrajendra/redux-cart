import React from 'react'

function Header(props) {
    console.warn("Home", props.data)
  return (
    <div>
        <div className='add-to-cart'>
            <span className='cart-count'>{props.data.length}</span>
            <img className='cart-img' src="https://png2.cleanpng.com/sh/fbbf9e3b1ef2fe7dfc402fa29d221fc0/L0KzQYm3U8I3N5D6j5H0aYP2gLBuTfFuaat0hp9sb32wg7n2kQBqdpgye9N7dD3yfr3wjvUue5l0iOJybnewfLFuj710fJD3fZ98aHXvdn68gfI6PWM3eaU7Mke8Q3A8UsI0OGk3TqMAMkKzSYW9U8QzOGY5RuJ3Zx==/kisspng-amazon-com-shopping-cart-online-shopping-logo-store-shelf-5ab9522a322793.5223082615220946342054.png" />
        </div>
 
    </div>
  )
}

export default Header
