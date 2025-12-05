import { useState } from "react";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const inc = () => setCount(c => Math.min(stock, c + 1));
  const dec = () => setCount(c => Math.max(1, c - 1));

  return (
    <div className="item-count">
      <button onClick={dec} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={inc} disabled={count >= stock}>+</button>
      <button onClick={() => onAdd(count)} disabled={stock === 0}>Agregar</button>
      {stock === 0 && <span style={{ color: "red" }}>Sin stock</span>}
    </div>
  );
};

export default ItemCount;
