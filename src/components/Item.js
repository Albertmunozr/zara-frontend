import { Link } from "react-router-dom";

function Item({ items }) {
  return (
    <div className="col">
      <div className="card h-100 shadow" key={items.id}>
        <div className="row g-0 p-3">
          <div className="col-4 align-self-center">
            <img
              src={items.imgUrl}
              alt={items.model}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-8">
            <div className="card-body text-center">
              <h4 className="card-title">{items.brand}</h4>
              <p className="card-text">{items.model}</p>
              <p className="card-text fs-3">{items.price} €</p>
              <Link
                className="btn btn-primary d-flex justify-content-center"
                to={`item/${items.id}`}
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
