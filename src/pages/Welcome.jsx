export default function Welcome() {
  return (
    <div 
      className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-blue-900">
      {/* style={{backgroundImage: "url('https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920')"}} */}
      <div className="h-full flex items-center justify-center">
        <div className="w-auto p-4 bg-white shadow-lg my-16 text-gray-600">
          <div className="mb-10 text-center text-4xl">Welcome to Chat Manager</div>
          <div className="mb-10 text-center">
            <a href="/login">GO TO APP</a>
          </div>
        </div>
      </div>
    </div>
  );
}
