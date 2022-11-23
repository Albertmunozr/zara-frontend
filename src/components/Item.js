import { Link } from "react-router-dom";

function Item({ items }) {
  return (
    <li key={items.id}>
      <h1>{items.brand}</h1>
      <Link to={`item/${items.id}`}>{items.model}</Link>
      <p>{items.price}</p>
      <img src={items.imgUrl} alt={items.model} />
    </li>
  );
}

export default Item;
