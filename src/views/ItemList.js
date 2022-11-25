import Item from "../components/Item";
import { useGetProductsQuery } from "../features/api/apiSlice";
import { useState } from "react";

function ItemList() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const { data, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (term) => {
    var results = data.filter((element) => {
      if (
        element.model.toString().toLowerCase().includes(term.toLowerCase()) ||
        element.brand.toString().toLowerCase().includes(term.toLowerCase())
      )
        return element;
    });
    setItems(results);
  };

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-4">
          <input
            name="Buscar"
            type="text"
            placeholder="Buscar por marca o modelo"
            value={search}
            onChange={handleChange}
            className="form-control my-3"
          />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {items.length === 0
          ? data.map((item) => <Item key={item.id} items={item} />)
          : items.map((item) => <Item key={item.id} items={item} />)}
      </div>
    </>
  );
}

export default ItemList;
