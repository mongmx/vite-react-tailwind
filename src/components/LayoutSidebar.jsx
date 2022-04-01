import { Routes, Route, Navigate } from "react-router-dom"
import routes from '../Routes';
import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <main className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col flex-grow p-4 bg-gray-100">
          <div className="flex flex-col flex-grow bg-white rounded p-4">
            <Routes>
              {routes.map((route) => (
                <Route path={route.path.replace("/app/","")} element={route.component} key={route.name} />
              ))}
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
