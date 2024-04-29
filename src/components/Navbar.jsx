import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-[#94a3b8] text-gray-100 border-blue-700 flex justify-between items-center px-4 py-2 rounded-md">
      <div className="text-lg font-semibold">LOGO</div>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 bg-teal-500 rounded-md focus:outline-none focus:bg-teal-400"
        >
          User Profile
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-[#60a5fa] border border-teal-400 rounded-md shadow-lg backdrop-blur-md">
            <div className="p-2 hover:bg-teal-400 cursor-pointer">Username</div>
            <div className="p-2 hover:bg-teal-400 cursor-pointer" onClick={() => alert("Logging out...")}>
              Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
