import { useState } from "react";
import ItemCount from "./ItemCount.jsx";
import { useCart } from "../context/CartContext.jsx";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>

      {!added ? (
        <ItemCount initial={1} stock={product.stock || 10} onAdd={handleAdd} />
      ) : (
        <a href="/cart">
          <button>Ir al carrito</button>
        </a>
      )}
    </>
  );
};

export default ItemDetail;
