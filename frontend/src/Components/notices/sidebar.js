import React, { useState } from 'react';
import { FaRegStickyNote, FaStar, FaUniversity, FaBuilding, FaBookmark, FaBriefcase, FaRegClock, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Sidebar = ({ setSelectedCategory }) => {
  const [active, setActive] = useState('All Notices');
  const [showAuthoritiesDropdown, setShowAuthoritiesDropdown] = useState(false);
  const [showDepartmentsDropdown, setShowDepartmentsDropdown] = useState(false);

  const menuItems = [
    { name: 'All Notices', icon: <FaRegStickyNote /> },
    { name: 'Important Notices', icon: <FaStar /> },
    {
      name: 'Authorities Notices',
      icon: <FaUniversity />,
      dropdown: [
        { name: 'Dean Office' },
        { name: 'Placement Office' },
        { name: 'OAA' },
        { name: 'VC Office' },
      ],
    },
    {
      name: 'Departments Notices',
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
    if (itemName === 'Authorities Notices') {
      setShowAuthoritiesDropdown(!showAuthoritiesDropdown);
    } else if (itemName === 'Departments Notices') {
      setShowDepartmentsDropdown(!showDepartmentsDropdown);
    }
  };

  return (
    <div className="h-full bg-blue-600 w-fit min-h-screen">
      <div className="p-5">
        <ul className="list-none p-0 m-0">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className={`text-white flex items-center space-x-3 cursor-pointer rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out 
                ${active === item.name ? 'bg-blue-700' : ''}`}
                onClick={() => {
                  setActive(item.name);
                  setSelectedCategory(item.name); // Update selected category in parent component
                  item.dropdown && handleDropdown(item.name);
                }}
                style={{ padding: '10px 15px' }}
              >
                {item.icon}
                <span>{item.name}</span>
                {item.dropdown && (
                  <>
                    {item.name === 'Authorities Notices' && (
                      showAuthoritiesDropdown ? <FaChevronUp /> : <FaChevronDown />
                    )}
                    {item.name === 'Departments Notices' && (
                      showDepartmentsDropdown ? <FaChevronUp /> : <FaChevronDown />
                    )}
                  </>
                )}
              </li>

              {/* Dropdown for Authorities Notices */}
              {item.name === 'Authorities Notices' && showAuthoritiesDropdown && (
                <ul className="pl-8 list-none p-0 m-0">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-white cursor-pointer hover:bg-blue-500 transition duration-300 ease-in-out rounded-lg
                      ${active === subItem.name ? 'bg-blue-700' : ''}`}
                      onClick={() => {
                        setActive(subItem.name);
                        setSelectedCategory(subItem.name); // Update selected category in parent component
                      }}
                      style={{ padding: '8px 15px' }}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              )}

              {/* Dropdown for Departments Notices */}
              {item.name === 'Departments Notices' && showDepartmentsDropdown && (
                <ul className="pl-8 list-none p-0 m-0">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-white cursor-pointer hover:bg-blue-500 transition duration-300 ease-in-out rounded-lg
                      ${active === subItem.name ? 'bg-blue-700' : ''}`}
                      onClick={() => {
                        setActive(subItem.name);
                        setSelectedCategory(subItem.name); // Update selected category in parent component
                      }}
                      style={{ padding: '8px 15px' }}
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
