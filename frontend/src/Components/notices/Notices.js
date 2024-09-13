import React, { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";



const Notices = () => {
    // State management for expanded notice, search term, and date filters
    const [expandedNotice, setExpandedNotice] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchDate, setSearchDate] = useState('');

    // Sample data
    const notices = [
        {ind: 1, postBy:"Admin", subject: "PhD Viva Voce of Ms. Poonam S. Jaiswal",
            Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
            , postOn: "2024-09-10" , time:"00:00 PM"},
        {ind: 2, postBy:"Placement Office", subject: "Webstaff Co. Ltd: Submission of bio-data for pre-final year students",
            Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
            , postOn: "2024-09-09" , time:"00:00 PM"},
        {ind: 3, postBy:"Admin", subject: "Appointment of Faculty Coordinator for Cognizance 2019",
            Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
            , postOn: "2024-09-08" , time:"00:00 PM"},
        {ind: 4, postBy:"Dean Office", subject: "Sports Preliminary Coaching Camp",
            Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
            , postOn: "2024-09-07" , time:"00:00 PM"},
        {ind: 5, postBy:"Placement Office", subject: "Advaita 18 Update - Event Registration Invitation - Xccelerate, Pinnacle and Sphinxv",
            Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
            , postOn: "2024-09-06" , time:"00:00 PM"},
        {ind: 6, postBy:"Admin", subject: "KLA Tencor (Software Engineer): Submission of bio-data for pre-final year students",
            Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
            , postOn: "2024-09-05" , time:"00:00 PM"},
        {ind: 7, postBy:"OAA", subject: "Notification (74th Meeting of Senate): Admission of Sponsored candidate(s) for PG Diploma & M Tech programs",
            Notice: "Cillum consequat cillum et do officia consectetur et sunt in nostrud aliquip commodo. Est esse voluptate reprehenderit velit excepteur et occaecat qui cupidatat aliquip fugiat minim. Sint culpa sit ex aute officia labore dolore. Officia cillum proident dolore duis."
            , postOn: "2024-09-04" , time:"00:00 PM"},
    ];

    // Filter notices based on search and date range
    const filteredNotices = notices.filter(notice => {
        const isSearchMatch = notice.subject.toLowerCase().includes(searchTerm.toLowerCase());
        const isSeachDate = searchDate ? new Date(notice.postOn).toDateString() === new Date(searchDate).toDateString() : true;

        return isSeachDate && isSearchMatch
    });

    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
                {/* Title */}
                <div className="p-4 font-semibold text-lg mb-4">All Notices</div>

                {/* Search and Date Filter */}
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
                        placeholder= "Search Date"
                        className="p-2 border border-gray-300 rounded"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                        
                    />
                </div>

                {/* Notices Table */}
                <table className="table-auto w-full bg-white border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            
                        </tr>
                    </thead>
                    <tbody>
                        {filteredNotices.length > 0 ? filteredNotices.map((notice, index) => (
                            <React.Fragment key={notice.ind}>
                                <tr className="border-b hover:bg-gray-100 cursor-pointer"
                                    >
                                    <td className="p-3 border">
                                        <FaRegBookmark className='text-yellow-500'/>
                                    </td>
                                    <td className="p-3 border">{notice.postBy}</td>
                                    <td className="p-3 border font-bold">{notice.subject}</td>
                                    <td className="p-3 border">{notice.postOn}</td>
                                    <td className="p-3 border">{notice.time}</td>
                                </tr>
                                {expandedNotice === index && (
                                    <tr>
                                        <td colSpan="5" className="p-4 bg-gray-50 text-gray-600">
                                            {notice.Notice}
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        )) : (
                            <tr>
                                <td colSpan="5" className="p-3 text-center">No notices found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Notices;
