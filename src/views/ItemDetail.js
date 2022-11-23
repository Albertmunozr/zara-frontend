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
        <div className="item">
          <h2>ID: {item.id}</h2>
          <div className="image">
            <img src={item.imgUrl} alt={item.model} />
          </div>
          <div className="description">
            <p>{item.brand}</p>
            <p>{item.model}</p>
            <p>Precio: {item.price}€</p>
            <p>{item.cpu}</p>
            <p>{item.ram}</p>
            <p>{item.os}</p>
            <p>{item.displayResolution}</p>
            <p>{item.battery}</p>
            <p>{item.primaryCamera}</p>
            <p>{item.dimentions}</p>
            <p>{item.weight}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              Almacenamiento:
              <select name="storage">
                {item.options.storages.map((storage) => {
                  return (
                    <option key={storage.name} value={storage.name}>
                      {storage.name}
                    </option>
                  );
                })}
              </select>
              ;
            </div>
            <div>
              Colores:
              <select name="color">
                {item.options.colors.map((color) => {
                  return (
                    <option key={color.name} value={color.name}>
                      {color.name}
                    </option>
                  );
                })}
              </select>
              ;
            </div>
            <button>Añadir</button>
          </form>
        </div>
      }
      <Link to="/">Volver a la lista</Link>
    </>
  );
}

export default ItemDetail;
