import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';

const menuItem = [
    { 
        path: '/dashboard/dashboard', 
        name: 'Dashboard', 
        icon: <FaTh /> 
    },
    { 
        path: '/dashboard/paper-formate', 
        name: 'Paper Formate', 
        icon: <FaUserAlt /> 
    },
    { 
        path: '/dashboard/recent-paper', 
        name: 'Recent Paper', 
        icon: <FaRegChartBar /> 
    },
    { 
        path: '/dashboard/all-paper', 
        name: 'All Paper', 
        icon: <FaCommentAlt /> 
    },
    { 
        path: '/dashboard/student-list', 
        name: 'Student List', 
        icon: <FaShoppingBag /> 
    },
    { 
        path: '/dashboard/user', 
        name: 'User', 
        icon: <FaThList /> 
    }
];

export default menuItem;