import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Breadcrumbs() {
  const location = useLocation();
  const breadcrumb = useSelector((state) => state.breadcrumb);

  return (
    <nav>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "breadcrumb-item active"
            : "breadcrumb-item"
        }
      >
        Listado de Productos
      </Link>
      {location.pathname.startsWith("/item") ? " / " + breadcrumb : null}
    </nav>
  );
}
export default Breadcrumbs;
