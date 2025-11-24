import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList.jsx";
import { getProducts } from "../data/products.js";

const ItemListContainer = () => {
  const { categoryId } = useParams(); // ← categoryId se obtiene desde useParams()
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      const filtered = categoryId
        ? res.filter((prod) => prod.category === categoryId)
        : res;
      setItems(filtered);
    });
  }, [categoryId]); // ← categoryId en dependencias para actualizar al cambiar la URL

  return (
    <div>
      <h3>{categoryId ? `Categoría: ${categoryId}` : "Catálogo completo"}</h3>
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;
