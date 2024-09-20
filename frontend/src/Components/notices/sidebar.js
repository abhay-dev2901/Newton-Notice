import React, { useState } from 'react';
import { FaRegStickyNote, FaStar, FaUniversity, FaBuilding, FaBookmark, FaBriefcase, FaRegClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = ({ setSelectedCategory , setShowSidebar }) => {
    const [active, setActive] = useState('All Notices');
    const [showAuthoritiesDropdown, setShowAuthoritiesDropdown] = useState(false);
    const [showDepartmentsDropdown, setShowDepartmentsDropdown] = useState(false);

    const menuItems = [
        { name: 'All Notices', icon: <FaRegStickyNote /> },
        { name: 'Important Notices', icon: <FaStar /> },
        {
            name: 'Authorities',
            icon: <FaUniversity />,
            dropdown: [
                { name: 'Dean Office' },
                { name: 'Placement Office' },
                { name: 'OAA' },
                { name: 'VC Office' },
            ],
        },
        {
            name: 'Departments',
            icon: <FaBuilding />,
            dropdown: [
                { name: 'B.tech CS AND AI' },
                { name: 'B.tech CS AND DS' },
                { name: 'B.Design' },
                { name: 'BBA' },
            ],
        },
        { name: 'Placement Online', icon: <FaBriefcase /> },
        { name: 'Bookmarks', icon: <FaBookmark /> },
        { name: 'Expired Notices', icon: <FaRegClock /> },
    ];

    const handleDropdown = (itemName) => {
        if (itemName === 'Authorities') {
            setShowAuthoritiesDropdown(!showAuthoritiesDropdown);
        } else if (itemName === 'Departments') {
            setShowDepartmentsDropdown(!showDepartmentsDropdown);
        }
    };

    function toggleSidebar(item,setShowSidebar, handleDropdown){
      const mediaQuery = window.matchMedia("(max-width: 600px)")
      if (!item.dropdown && mediaQuery.matches) {
        setShowSidebar(false); // Always hide for non-dropdown items
        return;
      } 
      else if(!mediaQuery.matches) {
          setShowSidebar(true);  // Toggle sidebar for smaller screens
        }
        handleDropdown(item.name);
      }

    return (
        <div className="bg-blue-600 md:static fixed top-0 left-0 h-screen z-10 md:w-3/12 w-11/12">
            <div className="p-5">
                <ul className="list-none p-0 m-0">
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <li
                                className={`text-white flex items-center space-x-3 cursor-pointer rounded-lg hover:bg-blue-500 transition duration-600 ease-in-out ${active === item.name ? 'bg-blue-700' : ''}`}
                                onClick={() => {
                                    setActive(item.name);
                                    setSelectedCategory(item.name);
                                    toggleSidebar(item,setShowSidebar,handleDropdown)
                                    
                                }}
                                style={{ padding: '10px 15px' }}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                                {item.dropdown && (
                                    <>
                                        {item.name === 'Authorities' && (showAuthoritiesDropdown ? <FaChevronUp /> : <FaChevronDown />)}
                                        {item.name === 'Departments' && (showDepartmentsDropdown ? <FaChevronUp /> : <FaChevronDown />)}
                                    </>
                                )}
                            </li>

                            {/* Dropdown for Authorities Notices */}
                            {item.name === 'Authorities' && showAuthoritiesDropdown && (
                                <ul className="pl-8 list-none p-0 m-0">
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className={`text-white cursor-pointer hover:bg-blue-500 p-2 rounded-lg transition duration-300 ease-in-out ${active === subItem.name ? 'bg-blue-700' : ''}`}
                                            onClick={() => {
                                                setActive(subItem.name);
                                                setSelectedCategory(subItem.name);
                          
                                                toggleSidebar(item,setShowSidebar,handleDropdown)
                                            }}
                                        >
                                            {subItem.name}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Dropdown for Departments Notices */}
                            {item.name === 'Departments' && showDepartmentsDropdown && (
                                <ul className="pl-8 list-none p-0 m-0">
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className={`text-white cursor-pointer hover:bg-blue-500 p-2 rounded-lg transition duration-300 ease-in-out ${active === subItem.name ? 'bg-blue-700' : ''}`}
                                            onClick={() => {
                                                setActive(subItem.name);
                                                setSelectedCategory(subItem.name);
                                                toggleSidebar(item,setShowSidebar,handleDropdown)
                                            }}
                                        >
                                            {subItem.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
