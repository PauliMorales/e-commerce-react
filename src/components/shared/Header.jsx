import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header className="header__container">
      <h1 className="header__logo">
        <Link to="/" className="header__title">
          E-COMMERCE
        </Link>
      </h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__items">
            <Link to="/login">
              <i className="bx bx-user"></i>
            </Link>
          </li>
          <li className="header__items">
            <Link to="/register">
              <i className="bx bx-user-plus"></i>
            </Link>
          </li>
          <li className="header__items">
            <Link to="/purchases">
              <i className="bx bx-shopping-bag"></i>
            </Link>
          </li>
          <li className="header__items ">
            <Link to="/cart">
              <i className="bx bx-cart"></i>
            </Link>
          </li>
          <li className="header__items">
            <i
              className="bx bx-log-out header__log-out"
              onClick={() => logout()}
            ></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
