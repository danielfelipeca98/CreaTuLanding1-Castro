import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext.jsx";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      <span>{totalItems()}</span>
    </div>
  );
};

export default CartWidget;
