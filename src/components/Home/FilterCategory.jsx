import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";

const FilterCategory = () => {
  const dispatch = useDispatch();

  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories";

  const [categories, getAllCategories] = useFetch(url);
  const [categoryIsShow, setCategoryIsShow] = useState(true);

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleClickCategories = (id) => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
    dispatch(getAllProductsThunk(url));
  };

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk());
  };

  const changeShowCategory = () => {
    setCategoryIsShow(!categoryIsShow);
  };

  return (
    <article className="category">
      <div onClick={changeShowCategory} className="selector_category">
        <h3 className="category_title">Category</h3>
        <i
          className={`btn-category-down bx ${
            categoryIsShow ? "bx-chevron-down" : "bx-chevron-up"
          }`}
        ></i>
      </div>
      { categoryIsShow && (
      <ul className="category__list">
        <li className="li__product-all" onClick={handleClickAllProducts}>All Products</li>
        {categories?.map((category) => (
          <li
            className="li__product-all"
            onClick={() => handleClickCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
      )}
    </article>
  )
}

export default FilterCategory
