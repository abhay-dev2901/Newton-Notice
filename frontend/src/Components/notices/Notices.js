import React, { useState } from 'react';
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import notices from './NoticesObject';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Notices = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Notices');
    const [currentPage, setCurrentPage] = useState(1);
    const [bookmarkedNotices, setBookmarkedNotices] = useState([]);
    const itemsPerPage = 5;

    const navigate = useNavigate();  // Initialize the useNavigate hook

    const filteredCategory = selectedCategory === 'Bookmarks' ? 'bookmarked' : selectedCategory;

    const filteredNotices = notices.filter(notice => {
        const isSearchMatch = notice.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const isCategoryMatch = filteredCategory === 'bookmarked' ? bookmarkedNotices.includes(notice.ind) : filteredCategory === 'All Notices' || notice.postBy === filteredCategory;
        const isDateMatch = searchDate ? new Date(notice.postOn).toDateString() === new Date(searchDate).toDateString() : true;

        return isSearchMatch && isCategoryMatch && isDateMatch;
    });

    const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
    const paginatedNotices = filteredNotices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
        // Navigate to the ViewNotice component with the notice id in the URL
        navigate(`/notice/${noticeId}`);
    };

    return (
        <div className="flex w-screen">
            <Sidebar setSelectedCategory={setSelectedCategory} />
            <div className="w-full bg-white shadow-lg rounded-lg p-6">
                <div className="p-4 font-semibold text-lg mb-4 text-blue-600">{selectedCategory}</div>
                <div className="mb-4 flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search by subject..."
                        className="p-2 border border-gray-300 rounded"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="date"
                        placeholder="Search Date"
                        className="p-2 border border-gray-300 rounded"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
                </div>

                <table className="table-auto min-w-full bg-white border-collapse">
                    <tbody>
                        {paginatedNotices.length > 0 ? paginatedNotices.map((notice) => (
                            <tr
                                key={notice.ind}
                                onClick={() => handleNoticeClick(notice.ind)}  // Navigate on row click
                                className="border-b hover:bg-gray-100 cursor-pointer"
                            >
                                <td className="p-3 border">
                                    <button onClick={(e) => { e.stopPropagation(); handleBookmarkToggle(notice.ind); }}>
                                        {bookmarkedNotices.includes(notice.ind) ? (
                                            <FaBookmark className='text-yellow-500' />
                                        ) : (
                                            <FaRegBookmark className='text-yellow-500' />
                                        )}
                                    </button>
                                </td>
                                <td className="p-3 border">{notice.postBy}</td>
                                <td className="p-3 border font-bold">{notice.subject}</td>
                                <td className="p-3 border">{notice.postOn}</td>
                                <td className="p-3 border">{notice.time}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="p-3 text-center">No notices found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                
                {filteredNotices.length > 0 && totalPages > 1 && (
                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-blue-500 rounded hover:bg-gray-400"
                        >
                            Previous
                        </button>
                        <span>{`Page ${currentPage} of ${totalPages}`}</span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-blue-500 rounded hover:bg-gray-400"
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
