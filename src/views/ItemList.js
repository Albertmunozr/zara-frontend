import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import { useGetProductsQuery } from "../features/api/apiSlice";

function ItemList() {
  const { data: items = [], isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="row justify-content-end">
        <div className="col-4">
          <SearchBar />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {items.map((item) => (
          <Item key={item.id} items={item} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
