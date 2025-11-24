import Item from "./Item.jsx";

const ItemList = ({ products }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ItemList;
