import React from 'react';
import Sidebar from "./notices/sidebar"; // Sidebar Component
import Notices from "./notices/Notices"; // Notices Component
import ViewNotice from './notices/viewNotics';

export const AllNotices = () => {
  return (
    // <div className="flex flex-row justify-start h-screen bg-gray-100">
    //     {/* Sidebar with a fixed width */}
    //     <div className="w-1/4 h-full">
    //         <Sidebar />
    //     </div>

    //     {/* Notices section with scrollable content */}
    //     <div className="w-3/4 h-full overflow-y-auto">
    //         <Notices />
    //     </div>
    // </div>

    <>
    <ViewNotice></ViewNotice>
    </>
  );
};

export default AllNotices;

