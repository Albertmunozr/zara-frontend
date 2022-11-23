import { useSelector } from "react-redux";
import Breadcrumbs from "./Breadcrumbs";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="row text-bg-dark p-4 rounded-bottom">
      <div className="col">
        <Link to="/">Zara Front End</Link>
        <Breadcrumbs />
      </div>
      <div className="col align-self-center text-end">
        <p>Carrito: {cart}</p>
      </div>
    </div>
  );
}

export default Header;
