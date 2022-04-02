import {
    HomeIcon,
    CubeIcon,
    ClipboardListIcon,
    UserGroupIcon,
    TableIcon
} from "@heroicons/react/outline";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import CRUDTablePage from "./pages/Crud";

const routes = [
    {
        path: '/app/dashboard',
        icon: <HomeIcon className="w-6 h-6 mr-3" />,
        name: 'Dashboard',
        component: <Dashboard />,
    },
    {
        path: '/app/products',
        icon: <CubeIcon className="w-6 h-6 mr-3" />,
        name: 'Products',
        component: <Products />,
    },
    {
        path: '/app/orders',
        icon: <ClipboardListIcon className="w-6 h-6 mr-3" />,
        name: 'Orders',
        component: <Orders />,
    },
    {
        path: '/app/users',
        icon: <UserGroupIcon className="w-6 h-6 mr-3" />,
        name: 'Users',
        component: <Users />,
    },
    {
        path: '/app/crud',
        icon: <TableIcon className="w-6 h-6 mr-3" />,
        name: 'CRUD Table',
        component: <CRUDTablePage />,
    },
    // {
    //     path: '/app',
    //     icon: <HomeIcon className="w-6 h-6 mr-3" />,
    //     name: 'Home',
    // },
    // {
    //     path: '/app/products',
    //     icon: <DuplicateIcon className="w-6 h-6 mr-3" />,
    //     name: 'Products',
    // },
    // {
    //     path: '/app/categories',
    //     icon: <CollectionIcon className="w-6 h-6 mr-3" />,
    //     name: 'Categories',
    // },
    // {
    //     path: '/app/campaigns',
    //     icon: <TemplateIcon className="w-6 h-6 mr-3" />,
    //     name: 'Campaigns',
    // },
    // {
    //     path: '/app/history',
    //     icon: <TableIcon className="w-6 h-6 mr-3" />,
    //     name: 'History',
    // },
    // {
    //     path: '/app/settings',
    //     icon: <CogIcon className="w-6 h-6 mr-3" />,
    //     name: 'Settings',
    // },
];

export default routes;
