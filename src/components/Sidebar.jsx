import { Link, useRoute } from "wouter";
import routes from '../Routes';

const ActiveLink = props => {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100" : "flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"}>
        {props.children}
      </a>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <nav className="w-56 flex-none bg-blue-900 px-2">
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <Link href="/">
            <a className="inline-flex flex-row items-center">
              <span className="leading-10 text-gray-100 text-2xl font-bold uppercase">Brandname</span>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <ul className="flex flex-col w-full">
          {routes.map((route) => (
            <li className="my-px" key={route.path}>
              <ActiveLink href={route.path}>
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
