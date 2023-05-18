import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/Home/FilterCategory";
import FilterPrice from "../components/Home/FilterPrice";


const Home = () => {
  const [imputValue, setimputValue] = useState("");
  const [showFilter, setshowfilter] = useState(false);

  const { productsGlobal } = useSelector((state) => state);

  const [fromTo, setfromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const input = useRef();

  const handleChangeInput = () => {
    setimputValue(input.current.value.toLowerCase().trim());
  };

  const productFilter = productsGlobal
    ?.filter((prod) => prod.title.toLowerCase().includes(imputValue))
    .filter((prod) => {
      const from = +fromTo.from;
      const to = +from.to;
      const price = +prod.price;
      if (from && to) {
        return from <= price && price <= to;
      }
      if (from && !to) {
        return from <= price;
      }
      if (!from && to) {
        return price <= to;
      }
      if (!from && !to) {
        return true;
      }
    });

  const toggleMenu = () => {
    setshowfilter(!showFilter);
  };

  return (
    <div className="home">
      <div
        className={`home-category-price ${
          showFilter && ("home-category-price__open" || "")
        }`}
      >
        <i
          className="bx bx-x filter-close-icon"
          onClick={() => toggleMenu()}
        ></i>
        <FilterCategory />
        <FilterPrice setfromTo={setfromTo} />
      </div>

      <div className="home_container">
        <div className="home_subcontainer">
          <div className="home_input-container">
            <input
              className="home_input"
              ref={input}
              onChange={handleChangeInput}
              placeholder="What are you looking for?"
              type="text"
            />
            <button className="home_btn">
              <i className="bx bx-search btn__search-p"></i>
            </button>
          </div>
          <i
            className="mobile_filter bx bx-filter-alt"
            onClick={() => toggleMenu()}
          >
            Filter
          </i>
        </div>
        <div className="home_product-grid">
          {productFilter?.map((prod) => (
            <CardProduct key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
