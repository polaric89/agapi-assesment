import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages/HomePage";
import QuotesPage from "./pages/QuotesPage";
import OrdersPage from "./pages/OrdersPage";
import CustomersPage from "./pages/CustomersPage";
import ProductsPage from "./pages/ProductsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}> 
          <Route index element={<HomePage />} />
          <Route path="quotes" element={<QuotesPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
