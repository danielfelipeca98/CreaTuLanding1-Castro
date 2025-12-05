import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (!cart.length) return <p>Tu carrito está vacío.</p>;

  return (
    <div className="cart">
      <h2>Carrito</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <div className="cart-item-details">
            <h4>{item.name}</h4>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${totalPrice()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <div style={{ marginTop: 12 }}>
        <a href="/checkout">
          <button>Finalizar compra</button>
        </a>
      </div>
    </div>
  );
};

export default Cart;
