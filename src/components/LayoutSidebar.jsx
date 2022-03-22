import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <main className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col flex-grow p-4 bg-gray-100">
          <div className="flex flex-col flex-grow bg-white rounded p-4">
            {/* <Content /> */}
            <Outlet />
          </div>
        </div>
      </main >
    </div >
  );
}
