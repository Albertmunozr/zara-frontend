import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { getProductName } from "../features/breadcrumbs/breadcrumbSlice";
import { useParams, Link } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useAddToCartMutation,
} from "../features/api/apiSlice";

function ItemDetail() {
  const params = useParams();
  const [addItem] = useAddToCartMutation();
  const dispatch = useDispatch();

  const {
    data: item,
    isLoading,
    isError,
    error,
  } = useGetProductByIdQuery(params.id);

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  dispatch(getProductName(item.model));

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = item.id;
    const colorCode = e.target.elements.color.options.selectedIndex + 1;
    const storageCode = e.target.elements.storage.options.selectedIndex + 1;

    addItem({ id, colorCode, storageCode });
    //console.log(id, storageCode, colorCode);

    dispatch(addToCart(1));
  };

  return (
    <>
      {
        <div className="item row">
          <div className="imageDetail align-self-center col-sm-12 col-md-6 p-3">
            <img src={item.imgUrl} alt={item.model} className="img-fluid" />
          </div>

          <div className="col-sm-12 col-md-6 p-3">
            <div className="description">
              <p>
                <span className="fw-bold">Marca:</span> {item.brand}
              </p>
              <p>
                <span className="fw-bold">Modelo:</span> {item.model}
              </p>
              <p>
                <span className="fw-bold">Precio:</span> {item.price}€
              </p>
              <p>
                <span className="fw-bold">CPU:</span> {item.cpu}
              </p>
              <p>
                <span className="fw-bold">RAM:</span> {item.ram}
              </p>
              <p>
                <span className="fw-bold">OS:</span> {item.os}
              </p>
              <p>
                <span className="fw-bold">Resolución:</span>{" "}
                {item.displayResolution}
              </p>
              <p>
                <span className="fw-bold">Batería:</span> {item.battery}
              </p>
              <p>
                <span className="fw-bold">Cámara:</span> {item.primaryCamera}
              </p>
              <p>
                <span className="fw-bold">Dimensiones:</span> {item.dimentions}
              </p>
              <p>
                <span className="fw-bold">Peso:</span> {item.weight} gr.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="d-grid gap-2 col-2 justify-content-start">
                Almacenamiento:
                <select name="storage" className="form-select">
                  {item.options.storages.map((storage) => {
                    return (
                      <option key={storage.name} value={storage.name}>
                        {storage.name}
                      </option>
                    );
                  })}
                </select>
                Colores:
                <select name="color" className="form-select">
                  {item.options.colors.map((color) => {
                    return (
                      <option key={color.name} value={color.name}>
                        {color.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-success my-4">
                Añadir al carrito
              </button>
            </form>
          </div>
          <Link
            to="/"
            className="btn btn-outline-primary col-4 m-3"
            role="button"
          >
            Volver a la lista
          </Link>
        </div>
      }
    </>
  );
}

export default ItemDetail;
