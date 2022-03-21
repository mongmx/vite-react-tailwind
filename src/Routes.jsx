import {
    HomeIcon,
    CubeIcon,
    ClipboardListIcon,
    UserGroupIcon
} from "@heroicons/react/outline";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";

const routes = [
    {
        path: '/',
        icon: <HomeIcon className="w-6 h-6 mr-3" />,
        name: 'Dashboard',
        component: <Dashboard />,
    },
    {
        path: '/products',
        icon: <CubeIcon className="w-6 h-6 mr-3" />,
        name: 'Products',
        component: <Products />,
    },
    {
        path: '/orders',
        icon: <ClipboardListIcon className="w-6 h-6 mr-3" />,
        name: 'Orders',
        component: <Orders />,
    },
    {
        path: '/users',
        icon: <UserGroupIcon className="w-6 h-6 mr-3" />,
        name: 'Users',
        component: <Users />,
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
