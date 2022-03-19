import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div class="min-h-screen flex flex-row">
      <Sidebar />
      <main class="flex flex-col flex-grow">
        <Header />
        <div class="flex flex-col flex-grow p-4 bg-gray-200">
          <div class="flex flex-col flex-grow bg-white rounded p-4">
            <Content />
          </div>
        </div>
      </main>
    </div>
  );
}
