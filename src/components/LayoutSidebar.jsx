import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard"
import Products from "../pages/Products"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <main className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col flex-grow p-4 bg-gray-100">
          <div className="flex flex-col flex-grow bg-white rounded p-4">
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route
                path="*"
                element={<Navigate to="dashboard" replace />}
              />
            </Routes>
          </div>
        </div>
      </main >
    </div >
  );
}
