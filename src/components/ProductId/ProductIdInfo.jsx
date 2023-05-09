import { useState } from "react";

const ProductIdInfo = ({ product }) => {

  

  const [quantity, setQuantity] = useState(1)

  const handleMinus = () => {
    if( quantity - 1 >= 1 ) {
        setQuantity(quantity-1)
    }
  }

  const handlePlus = () => setQuantity(quantity+1)
  

  return (
    <section>
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <div>
          <span>Price</span>
          <span>{product?.price}</span>
        </div>
        <div>
          <span>Quantity</span>
          <div>
            <button onClick={handleMinus}><i  className="bx bxs-minus-circle"></i></button>
            <div>{quantity}</div>
            <button onClick={handlePlus}><i className="bx bxs-plus-circle"></i></button>
          </div>
        </div>
        <button> Add to cart <i className='bx bx-cart-alt' ></i></button>
      </footer>
    </section>
  );
};

export default ProductIdInfo;
