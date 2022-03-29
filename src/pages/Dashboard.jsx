import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

const Dashboard = () => {
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleSubmit = (e) => {
    alert('A name was submitted: ' + name);
    e.preventDefault();
  };

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <div className="w-64 mt-4 grid grid-cols-1 gap-6">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            aria-label="fullname"
            className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500"
          />
          <Button type="submit" value="Submit">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
