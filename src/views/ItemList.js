import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import { useGetProductsQuery } from "../features/api/apiSlice";

function ItemList() {
  const { data: items = [], isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <SearchBar />
      <h1>Listado de Productos</h1>

      <ul>
        {items.map((item) => (
          <Item key={item.id} items={item} />
        ))}
      </ul>
    </>
  );
}

export default ItemList;
