import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchases from "../components/Purchases/ProductPurchases";

const Purchases = () => {
  const { purchases, getAllProductsPurchased } = usePurchases();

  useEffect(() => {
    getAllProductsPurchased();
  }, []);

  return (
    <div>
      <h2>My Purchases</h2>
      <div>
        {purchases?.map(prodPurchase => (
          <ProductPurchases 
          key={prodPurchase.id} 
          purchases={prodPurchase} />
        ))}
      </div>
    </div>
  );
};

export default Purchases;
