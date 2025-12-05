import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail.jsx";
import { getProductByIdFromFirestore } from "../services/firestoreService.js";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductByIdFromFirestore(itemId)
      .then(data => setProduct(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="item-detail">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
