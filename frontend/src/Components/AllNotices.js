import React from 'react';
import Sidebar from "./notices/sidebar"; // Sidebar Component
import Notices from "./notices/Notices"; // Notices Component
import ViewNotice from './notices/viewNotics';

export const AllNotices = () => {
  return (
    <div className="flex flex-row justify-start h-screen bg-gray-100">

        <div className="w-4/4 h-full overflow-y-auto">
            <Notices />
        </div>
    </div>

 
  );
};

export default AllNotices;

