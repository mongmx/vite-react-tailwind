import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-row">
      <Sidebar />
      <main className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col flex-grow p-4 bg-gray-200">
          <div className="flex flex-col flex-grow bg-white rounded p-4">
            <Content />
          </div>
        </div>
      </main>
    </div>
  );
}
