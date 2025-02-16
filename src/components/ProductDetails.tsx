// src/components/ProductDetails.tsx

import React from 'react';
import { ProductData } from '../data';
import  '../App.css'

interface ProductDetailsProps {
  product: ProductData;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-subtitle">{product.subtitle}</p>
      <div className="product-tags">
        {product.tags.map((tag, index) => (
          <span key={index} className="product-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;