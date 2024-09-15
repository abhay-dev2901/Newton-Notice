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
        <div className="flex justify-center h-screen bg-gray-100 p-6">
            <div className="w-full max-w-3xl bg-white shadow-sm rounded border border-gray-300 p-6">
                {/* Notice Header */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-semibold mb-2 text-blue-800">{notice.subject}</h2>
                    <div className="text-sm text-gray-500">
                        <p><strong>Posted by:</strong> {notice.postBy}</p>
                        <p><strong>Date:</strong> {notice.postOn} | <strong>Time:</strong> {notice.time}</p>
                        <p><strong>Deadline:</strong> {notice.deadline}</p>
                    </div>
                </div>

                {/* Notice Content */}
                <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{notice.Notice}</p>
                </div>

                {/* Reaction Section */}
                <div className="flex space-x-4 border-t pt-4 mb-6">
                    <button
                        className={`flex items-center ${userReaction.like ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500`}
                        onClick={() => handleReaction('like')}
                    >
                        <FaThumbsUp className="mr-1" /> Like {reactions.like > 1 && reactions.like}
                    </button>
                    <button
                        className={`flex items-center ${userReaction.laugh ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500`}
                        onClick={() => handleReaction('laugh')}
                    >
                        <FaLaugh className="mr-1" /> Laugh {reactions.laugh > 1 && reactions.laugh}
                    </button>
                    <button
                        className={`flex items-center ${userReaction.love ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500`}
                        onClick={() => handleReaction('love')}
                    >
                        <FaHeart className="mr-1" /> Love {reactions.love > 1 && reactions.love}
                    </button>
                    <button
                        className={`flex items-center ${userReaction.sad ? 'text-blue-500' : 'text-gray-600'} hover:text-blue-500`}
                        onClick={() => handleReaction('sad')}
                    >
                        <FaSadCry className="mr-1" /> Sad {reactions.sad > 1 && reactions.sad}
                    </button>
                </div>

                {/* Comments Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Comments</h3>
                    {comments.length > 0 ? (
                        <ul className="space-y-2">
                            {comments.map((comment, index) => (
                                <li key={index} className="p-2 bg-gray-50 border border-gray-200 rounded">
                                    <h3 className='font-semibold'>You</h3>
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    )}
                </div>

                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="flex flex-col space-y-2">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                    />
                    <button
                        type="submit"
                        className="self-end px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
                    >
                        Add Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ViewNotice;
