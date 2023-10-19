import React from 'react';
import products from '../data/products.json'; 

const ProductDetail = ({ match }) => {
  const productId = match.params.id;
  const product = products.find((p) => p.id === productId);

  return (
    <div>
      <h2>Detalles del producto</h2>
      <p>Nombre: {product.name}</p>
      <p>Precio: {product.price}</p>
      <button>Comprar</button>
    </div>
  );
};

export default ProductDetail;
