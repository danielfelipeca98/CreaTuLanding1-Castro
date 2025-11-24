// src/data/products.js
export const products = [
  { id: 1, title: "Remera Negra", category: "remeras", price: 5000 },
  { id: 2, title: "Pantalón Jeans", category: "pantalones", price: 18000 },
  { id: 3, title: "Zapatillas Urbanas", category: "zapatillas", price: 45000 },
  { id: 4, title: "Remera Blanca", category: "remeras", price: 4500 }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === Number(id))), 500);
  });
};
