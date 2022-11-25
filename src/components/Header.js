import { useSelector } from "react-redux";
import Breadcrumbs from "./Breadcrumbs";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="row text-bg-dark p-4 rounded-bottom">
      <div className="col">
        <Link to="/" className="text-decoration-none">
          <h1 className="display-4 text-secondary">Zara Frontend</h1>
        </Link>
        <Breadcrumbs />
      </div>
      <div className="col align-self-center text-end">
        <p className="fw-bold">Carrito: {cart}</p>
      </div>
    </div>
  );
}

export default Header;
