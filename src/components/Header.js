import { useSelector } from "react-redux";
import Breadcrumbs from "./Breadcrumbs";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <Link to="/">Zara Front End</Link>
      <Breadcrumbs />
      <span>Items: {cart}</span>
    </div>
  );
}

export default Header;
