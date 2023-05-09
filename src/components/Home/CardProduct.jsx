import React from 'react'

const CardProduct = ({ product }) => {

        console.log(product)

  return (
    <article className='Product'>
        <header className='Product__header'>
            <img className='Product__img' src={product.images[0].url} alt="" />
        </header>
        <section className='Product__section'>
            <h4 className='Product__subtitle'>{product.brand}</h4>
            <h3 className='Product__title'>{product.title}</h3>
        </section>
        <div className='Product__price'>
            <span className='Product__price-label'>Price</span>
            <span className='Product__price-value'>{product.price}</span>
            <button>
                <i className='bx bx-cart-alt product__btn-icon'></i>
            </button>

        </div>
    </article>
  )
}

export default CardProduct