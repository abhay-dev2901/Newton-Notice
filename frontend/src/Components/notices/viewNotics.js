import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaThumbsUp, FaLaugh, FaHeart, FaSadCry } from 'react-icons/fa';
import notices from './NoticesObject';

const ViewNotice = () => {
    const { id } = useParams();  // Get notice id from URL parameters
    const [notice, setNotice] = useState(null);

    const [userReaction, setUserReaction] = useState({
        like: false,
        laugh: false,
        love: false,
        sad: false,
    });
    
    const [reactions, setReactions] = useState({
        like: 0,
        laugh: 0,
        love: 0,
        sad: 0,
    });

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    // Fetch the notice data based on id
    useEffect(() => {
        const fetchNotice = () => {
            const fetchedNotice = notices.find(n => n.ind === parseInt(id));
            setNotice(fetchedNotice);
        };
        fetchNotice();
    }, [id]);

    // Handle reaction updates (toggle on/off)
    const handleReaction = (type) => {
        setUserReaction(prevState => ({
            ...prevState,
            [type]: !prevState[type], // Toggle the selected reaction
        }));

        setReactions(prevReactions => ({
            ...prevReactions,
            [type]: userReaction[type] ? prevReactions[type] - 1 : prevReactions[type] + 1, // Increment/Decrement count
        }));
    };

    // Handle comment submission
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    if (!notice) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg border border-gray-300 p-6">
                {/* Notice Header */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-2xl font-bold mb-2 text-blue-900">{notice.subject}</h2>
                    <div className="text-sm text-gray-600">
                        <p><strong>Posted by:</strong> {notice.postBy}</p>
                        <p><strong>Date:</strong> {notice.postOn} | <strong>Time:</strong> {notice.time}</p>
                        <p><strong>Deadline:</strong> {notice.deadline}</p>
                    </div>
                </div>

                {/* Notice Content */}
                <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{notice.Notice}</p>
                </div>

                {/* Reaction Section */}
                <div className="flex space-x-6 border-t pt-4 mb-8">
                    <button
                        className={`flex items-center ${userReaction.like ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500 transition-transform duration-150 ease-in-out transform hover:scale-105`}
                        onClick={() => handleReaction('like')}
                    >
                        <FaThumbsUp className="mr-2" /> Like {reactions.like > 0 && reactions.like}
                    </button>
                    <button
                        className={`flex items-center ${userReaction.laugh ? 'text-yellow-500' : 'text-gray-600'} hover:text-yellow-500 transition-transform duration-150 ease-in-out transform hover:scale-105`}
                        onClick={() => handleReaction('laugh')}
                    >
                        <FaLaugh className="mr-2" /> Laugh {reactions.laugh > 0 && reactions.laugh}
                    </button>
                    <button
                        className={`flex items-center ${userReaction.love ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 transition-transform duration-150 ease-in-out transform hover:scale-105`}
                        onClick={() => handleReaction('love')}
                    >
                        <FaHeart className="mr-2" /> Love {reactions.love > 0 && reactions.love}
                    </button>
                    <button
                        className={`flex items-center ${userReaction.sad ? 'text-blue-300' : 'text-gray-600'} hover:text-blue-300 transition-transform duration-150 ease-in-out transform hover:scale-105`}
                        onClick={() => handleReaction('sad')}
                    >
                        <FaSadCry className="mr-2" /> Sad {reactions.sad > 0 && reactions.sad}
                    </button>
                </div>

                {/* Comments Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Comments</h3>
                    {comments.length > 0 ? (
                        <ul className="space-y-4">
                            {comments.map((comment, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    {/* Placeholder for User Avatar */}
                                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                                        <span>U</span>
                                    </div>
                                    <div className="bg-gray-100 rounded-lg p-3 shadow">
                                        <h4 className="font-semibold text-gray-700">You</h4>
                                        <p className="text-gray-600">{comment}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    )}
                </div>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-4">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows="3"
                    />
                    <button
                        type="submit"
                        className="self-end px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        Add Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ViewNotice;
