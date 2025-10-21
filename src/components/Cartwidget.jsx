import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FaShoppingCart size={20} />
      <span style={{ marginLeft: '5px' }}>6</span> {/* Número de productos */}
    </div>
  );
};

export default CartWidget;