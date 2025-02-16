// src/App.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './components/ProductDetails';
import SalesChart from './components/SalesChart';
import SalesTable from './components/SalesTable';
import { fetchProductData } from './store/productSlice';
import { RootState, AppDispatch } from './store/store'; // Import AppDispatch
import './App.css';

function App() {
  const dispatch = useDispatch<AppDispatch>(); // Explicitly type the dispatch
  const { data, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProductData()); // Now TypeScript knows the correct action type
  }, [dispatch]);

  if (loading) {
    return <div className="app-container">Loading...</div>;
  }

  if (error) {
    return <div className="app-container">Error: {error}</div>;
  }

  if (!data) {
    return <div className="app-container">No data available.</div>;
  }

  return (
    <div className="app-container">
      <header className="app-header">
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