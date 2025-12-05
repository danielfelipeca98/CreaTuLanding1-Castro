import { useState, useEffect } from "react";
import ItemList from "../components/ItemList.jsx";
import { getProductsFromFirestore, getProductsByCategoryFromFirestore } from "../services/firestoreService.js";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const data = categoryId 
          ? await getProductsByCategoryFromFirestore(categoryId)
          : await getProductsFromFirestore();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="item-list">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
