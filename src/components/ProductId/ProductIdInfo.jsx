import { useState } from "react";
import useCrudCart from "../../hooks/useCrudCart";

const ProductIdInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useCrudCart();

  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => setQuantity(quantity + 1);

  const handleToCart = () => {
    const data = {
      quantity: quantity,
      productId: product.id,
    };
    addProductToCart(data);
  };

  return (
    <section>
      <div>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
      </div>
      <footer>
        <div>
          <div>
            <span>Price</span>
            <span>{product?.price}</span>
          </div>
          <div>
            <span>Quantity</span>
            <div>
              <button onClick={handleMinus}>
                <i className="bx bxs-minus-circle"></i>
              </button>
              <div>{quantity}</div>
              <button onClick={handlePlus}>
                <i className="bx bxs-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleToCart}>
            {" "}
            Add to cart <i className="bx bx-cart-alt"></i>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default ProductIdInfo;
