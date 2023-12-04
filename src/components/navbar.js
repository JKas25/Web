import logo from "../images/DS.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ProductPage from "../pages/product-page";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import ContactPage from "../pages/contact-page";
import HolidayDeals from "../pages/holidayDeals";
import Fragrance from "../pages/fragrance";
import Beauty from "../pages/beauty";
import Clothing from "../pages/clothing";
import Cookwear from "../pages/cookwear";
import BedBath from "../pages/bedBath";
import Jewelry from "../pages/jewelry";
import TermsOfService from "../pages/termsOfService";
import PrivacyPolicy from "../pages/privacyPolicy";
import FAQ from "../pages/faq";
import Location from "../pages/location";





function Navbar() {
  return (
    <Router>
      <nav
        className="sticky-top navbar navbar-expand-lg navbar-light bg-light"
        aria-label="Ninth navbar example"
      >
        <div className="container-xl">
          <NavLink className="navbar-brand" to="/">
            {" "}
            <img
              className="logo-image"
              src={logo}
              height="50"
              width="50"
              alt="brand-logo"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07XL"
            aria-controls="navbarsExample07XL"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item fs-5">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item fs-5">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/product"
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item fs-5 dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catgory
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/fragrance">
                      Fragrance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/clothing">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/beauty">
                      Beauty
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/cookwear">
                      Cookwear
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/bedBath">
                      Bed + Bath
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/jewelry">
                      Jewelry
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item fs-5">
              <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/about-page"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item fs-5">
              <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex flex-row" role="search">
              <input
                className="form-control border-2"
                type="search"
                placeholder="Search for a product..."
                aria-label="Search"
              />
              <button className="btn btn-primary text-white ms-2">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route element={<ProductPage />} path="/product" />
        <Route element={<AboutPage />} path="/about-page" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<HolidayDeals />} path="/holiday" />
        <Route element={<Fragrance />} path="/fragrance" />
        <Route element={<Beauty />} path="/beauty" />
        <Route element={<Cookwear />} path="/cookwear" />
        <Route element={<BedBath />} path="/bedBath" />
        <Route element={<Jewelry />} path="/jewelry" />
        <Route element={<Clothing />} path="/clothing" />
        <Route element={<TermsOfService />} path="/termsOfService" />
        <Route element={<PrivacyPolicy />} path="/privacyPolicy" />
        <Route element={<FAQ />} path="/faq" />
        <Route element={<Location />} path="/location" />

      </Routes>
    </Router>
  );
}
export default Navbar;
