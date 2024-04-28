import {
    FaTh,       // Dashboard icon
    FaFileAlt,  // Papers icon
    FaUserAlt,  // User icon
    FaListAlt,  // Student List icon
    FaUserGraduate,  // Backlog Student icon
    FaShoppingBag,   // Shopping (generic purpose)
    FaChartBar       // Chart for statistics or analysis
} from 'react-icons/fa';

const menuItem = [
    { 
        path: '/dashboard/dashboard', 
        name: 'Dashboard', 
        icon: <FaTh />  // FaTh represents a dashboard-like layout
    },
    { 
        path: '/dashboard/papers', 
        name: 'Papers', 
        icon: <FaFileAlt /> // FaFileAlt for documents/papers
    },
    { 
        name: 'Student List', 
        icon: <FaListAlt />, // FaListAlt for lists
        subRoutes: [
            {
                path: '/dashboard/student/m1',
                name: 'M1 Student',
                icon: <FaUserAlt /> // FaUserAlt for users/students
            },
            {
                path: '/dashboard/student/m2',
                name: 'M2 Student',
                icon: <FaUserAlt /> // Repeated for consistency
            },
            {
                path: '/dashboard/student/m3',
                name: 'M3 Student',
                icon: <FaUserAlt /> // Repeated for consistency
            }
        ]
    },
    { 
        name: 'Backlog student list', 
        icon: <FaUserGraduate />, // FaUserGraduate for student-related backlog
        subRoutes: [
            {
                path: '/dashboard/student/backlog/m1',
                name: 'M1 Student',
                icon: <FaUserGraduate /> // Keeping the same icon for consistency
            },
            {
                path: '/dashboard/student/backlog/m2',
                name: 'M2 Student',
                icon: <FaUserGraduate /> // Keeping the same icon for consistency
            },
            {
                path: '/dashboard/student/backlog/m3',
                name: 'M3 Student',
                icon: <FaUserGraduate /> // Keeping the same icon for consistency
            }
        ]
    },
    { 
        path: '/dashboard/student-12th', 
        name: '12th Student List', 
        icon: <FaShoppingBag />  // Using FaShoppingBag for general purpose; consider a more relevant icon if available
    },
    { 
        path: '/dashboard/user', 
        name: 'User', 
        icon: <FaUserAlt />  // FaUserAlt appropriate for user-related options
    }
];

export default menuItem;