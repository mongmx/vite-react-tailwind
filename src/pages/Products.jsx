import Button from "../components/Button";
import PageTitle from "../components/PageTitle";

const Products = () => {
  return (
    <>
      <PageTitle>Create Products</PageTitle>
      <div className="w-96 mt-4 grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Full name</span>
          <input type="text" className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500" />
        </label>
        <label className="block">
          <span className="text-gray-700">Email address</span>
          <input type="email" className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500" />
        </label>
        <label className="block">
          <span className="text-gray-700">When is your event?</span>
          <input type="date" className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500" />
        </label>
        <label className="block">
          <span className="text-gray-700">What type of event is it?</span>
          <select className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-blue-500">
            <option>Corporate event</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Other</option>
          </select>
        </label>
        <Button primary={+true} full={+true}>Save</Button>
        <Button disabled={+true}>Delete</Button>
      </div>
    </>
  );
}

export default Products;
