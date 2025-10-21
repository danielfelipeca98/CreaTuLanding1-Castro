import CartWidget from './Cartwidget';


const NavBar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#eeeeeeff',

     }}>
      <div>
        <h2>Daniel Shop</h2>
      </div>
      <div>
        <a href="#" style={{ margin: '0 10px' }}>Inicio</a>
        <a href="#" style={{ margin: '0 10px' }}>Productos</a>
        <a href="#" style={{ margin: '0 10px' }}>Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;