import React from "react";
const ItemDetail = ({ product }) => {
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
