// src/App.tsx

import React from 'react';
import { productData, ProductData } from './data';
import ProductDetails from './components/ProductDetails';
import SalesChart from './components/SalesChart';
import SalesTable from './components/SalesTable';
import './App.css';

function App() {
  // In a real app, you'd fetch this data from an API
  const data: ProductData = productData[0]; // We only have one product

  return (
    <div className="app-container">
      <header className='app-header'>
        <h1 className="app-title">Stackline</h1>
      </header>
      <div className="content">
        <aside className="sidebar">
          <ProductDetails product={data} />
        </aside>
        <main className="main-content">
            <h2>Retail Sales</h2>
          <SalesChart salesData={data.sales} />
          <SalesTable salesData={data.sales} />
        </main>
      </div>
    </div>
  );
}

export default App;