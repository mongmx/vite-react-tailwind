import { Link, NavLink } from "react-router-dom";
import pageRoutes from '../pages/routes';

const ActiveLink = props => {
  return (
    <NavLink {...props}
      className={({ isActive }) => isActive ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100" : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"}>
      {props.children}
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <nav className="w-56 flex-none bg-blue-900 px-2">
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <Link to="/">
            <div className="inline-flex flex-row items-center">
              <span className="leading-10 text-gray-100 text-2xl font-bold uppercase">Chat Manager</span>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex flex-col w-full">
          {pageRoutes.map((route) => (
            <li className="my-px" key={route.path}>
              <ActiveLink to={route.path}>
                {route.icon}
                {route.name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
