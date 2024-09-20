import React, { useState } from 'react';
import { FaRegBookmark, FaBookmark, FaBars, FaTimes } from "react-icons/fa";
import notices from './NoticesObject';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';

const Notices = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Notices');
    const [currentPage, setCurrentPage] = useState(1);
    const [showSidebar, setShowSidebar] = useState(true);
    const [bookmarkedNotices, setBookmarkedNotices] = useState([]);
    const itemsPerPage = 4;

    const navigate = useNavigate();

    const filteredCategory = selectedCategory === 'Bookmarks' ? 'bookmarked' : selectedCategory;

    const filteredNotices = notices.filter(notice => {
        const isSearchMatch = notice.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const isCategoryMatch = filteredCategory === 'bookmarked' ? bookmarkedNotices.includes(notice.ind) : filteredCategory === 'All Notices' || notice.postBy === filteredCategory;
        const isDateMatch = searchDate ? new Date(notice.postOn).toDateString() === new Date(searchDate).toDateString() : true;

        return isSearchMatch && isCategoryMatch && isDateMatch;
    });

    const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
    const paginatedNotices = filteredNotices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    // const paginatedNotices = [];

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleBookmarkToggle = (noticeId) => {
        if (bookmarkedNotices.includes(noticeId)) {
            setBookmarkedNotices(bookmarkedNotices.filter(id => id !== noticeId));
        } else {
            setBookmarkedNotices([...bookmarkedNotices, noticeId]);
        }
    };

    const handleNoticeClick = (noticeId) => {
        navigate(`/notice/${noticeId}`);
    };

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);

    };

    return (
        <div className="flex w-screen bg-gray-100">
            {showSidebar && <Sidebar setSelectedCategory={setSelectedCategory} setShowSidebar={setShowSidebar} />}

            <div className="relative md:absolute text-blue-600 cursor-pointer md:hidden z-20" onClick={handleSidebar}>
                {showSidebar ? <FaTimes size={28} className="text-white " /> : <FaBars size={28} />}
            </div>
            
            <div className="md:w-full p-6">
                <div className="text-2xl font-semibold text-blue-700 mb-1">{selectedCategory}</div>
                <div className="mb-2 flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search by subject..."
                        className="p-3 w-full sm:w-1/2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="date"
                        className="p-3 w-full sm:w-1/3 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-400"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {paginatedNotices.length > 0 ? paginatedNotices.map((notice) => (
                        <div 
                            key={notice.ind} 
                            onClick={() => handleNoticeClick(notice.ind)}
                            className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300 
                            ease-in-out transform hover:scale-105 cursor-pointer"
                        >
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleBookmarkToggle(notice.ind); }} 
                                className="absolute top-4 right-4 text-yellow-500"
                            >
                                {bookmarkedNotices.includes(notice.ind) ? (
                                    <FaBookmark size={24} />
                                ) : (
                                    <FaRegBookmark size={24} />
                                )}
                            </button>
                            <div className="text-lg font-semibold text-blue-600">{notice.subject}</div>
                            <div className="text-gray-600 mt-2">{notice.postBy}</div>
                            <div className="text-gray-500 text-sm mt-1">{new Date(notice.postOn).toLocaleDateString()} | {notice.time}</div>
                        </div>
                    )) : (
                        <div className="p-6 text-center text-gray-500">No notices found.</div>
                    )}
                </div>

                {filteredNotices.length > 0 && totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-4 mt-8">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300"
                        >
                            Previous
                        </button>
                        <span className="text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notices;
