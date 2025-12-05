import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(userData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <input
        name="name"
        type="text"
        placeholder="Tu nombre"
        value={userData.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Tu email"
        value={userData.email}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        type="text"
        placeholder="Tu teléfono"
        value={userData.phone}
        onChange={handleChange}
        required
      />

      <button type="submit">Confirmar Orden</button>
    </form>
  );
};

export default CheckoutForm;
