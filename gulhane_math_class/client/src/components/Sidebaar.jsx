import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import menuItem from '../data/menuItem';

const Sidebaar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white w-${isOpen ? '64' : '16'} transition-all duration-300`}>
                <div className="p-4">
                    <h1 className={`text-xl font-semibold ${isOpen ? 'block' : 'hidden'}`}>Logo</h1>
                    <div className="mt-4">
                        {menuItem.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className="flex items-center py-2 px-4 hover:bg-gray-700 transition-colors duration-200"
                                activeClassName="bg-gray-700"
                                onClick={toggle}
                            >
                                <div className="mr-3">{item.icon}</div>
                                <span className={`truncate ${isOpen ? 'block' : 'hidden'}`}>{item.name}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-4 left-4">
                    <FaBars className="text-white cursor-pointer" onClick={toggle} />
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
};

export default Sidebaar;
