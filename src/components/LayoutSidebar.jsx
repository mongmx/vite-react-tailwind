import { Routes, Route, Navigate } from "react-router-dom"
import pageRoutes from '../pages/routes';
import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <main className="flex flex-col flex-grow h-screen overflow-hidden">
        <Header />
        <div className="flex flex-col flex-grow p-4 bg-gray-100">
          <div className="flex flex-col flex-grow p-4 h-full overflow-hidden">
            <Routes>
              {pageRoutes.map((route) => (
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
