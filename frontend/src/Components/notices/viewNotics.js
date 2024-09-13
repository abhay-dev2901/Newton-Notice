import React from 'react';

const ViewNotice = ({ notice }) => {
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

    if (!notice) {
        return <div className="text-center">Notice not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
            {/* Notice Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">{notice.subject}</h1>
                <div className="flex space-x-4">
                    {/* Share & Comment Icons */}
                    <button className="text-blue-600">Share</button>
                    <button className="text-blue-600">Comment</button>
                </div>
            </div>

            {/* Notice Metadata */}
            <div className="mb-4 text-gray-600">
                <p><strong>Posted by:</strong> {notices.postBy}</p>
                <p><strong>Posted on:</strong> {notices.postOn}</p>
                <p><strong>Deadline:</strong> {notices.deadline || 'N/A'}</p>
            </div>

            {/* Notice Content */}
            <div className="mb-6">
                <p>{notice.mainContent}</p>
            </div>

            {/* Regards */}
            <div className="border-t pt-4 text-gray-600">
                <p><strong>Regards,</strong></p>
                <p>{notice.postBy}</p>
            </div>

            {/* Comments Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                {/* Add Comment Form */}
                <div className="mb-6">
                    <textarea className="w-full p-3 border rounded" rows="3" placeholder="Add a comment..."></textarea>
                    <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Post Comment</button>
                </div>
                {/* Display Comments */}
                {/* This part will be dynamically loaded with comments */}
            </div>
        </div>
    );
};

export default ViewNotice;
