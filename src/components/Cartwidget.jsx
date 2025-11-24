import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart size={20} />
      <span style={{ marginLeft: "5px" }}>6</span>
    </div>
  );
};

export default CartWidget;
