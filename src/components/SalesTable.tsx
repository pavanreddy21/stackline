// src/components/SalesTable.tsx
import React from 'react';
import { SaleData } from '../data';
import '../App.css'

interface SalesTableProps {
  salesData: SaleData[];
}

const SalesTable: React.FC<SalesTableProps> = ({ salesData }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales.toLocaleString()}</td>
              <td>${sale.wholesaleSales.toLocaleString()}</td>
              <td>{sale.unitsSold.toLocaleString()}</td>
              <td>${sale.retailerMargin.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;