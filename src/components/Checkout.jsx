import { useCart } from "../context/CartContext.jsx";
import { db } from "../services/firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import CheckoutForm from "./CheckoutForm.jsx";
import { useState } from "react";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleConfirm = async (userData) => {
    setLoading(true);
    setErrorMsg(null);
    const order = { buyer: userData, items: cart, total: totalPrice(), date: Timestamp.now() };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error(error);
      setErrorMsg("Ocurrió un error al generar la orden. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h3>Generando tu orden...</h3>;
  if (orderId)
    return (
      <div style={{ padding: 20 }}>
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu ID de orden es:</p>
        <strong>{orderId}</strong>
        <div style={{ marginTop: 12 }}>
          <a href="/">Volver al inicio</a>
        </div>
      </div>
    );

  if (!cart.length) return <p>Tu carrito está vacío.</p>;

  return (
    <div className="checkout-form">
      <h2>Finalizar compra</h2>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <CheckoutForm onConfirm={handleConfirm} />
    </div>
  );
};

export default Checkout;
