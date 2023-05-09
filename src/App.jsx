import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getAllProductsThunk } from "./store/slices/products.slice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
  }, []);

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
