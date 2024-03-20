'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for API calls

function ContentList() {
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/content'); // Adjust URL based on your server setup
      setContentData(response.data);
    };
    fetchData();
  }, []);

  const handleApprove = async (contentId) => {
    try {
      const response = await axios.patch(`http://localhost:3001/content/${contentId}`, { status: 'approved' });
      setContentData(contentData.map((content) => (content.id === contentId ? response.data : content)));
    } catch (error) {
      console.error('Error approving content:', error);
      // Handle errors appropriately (e.g., display error messages)
    }
  };

  const handleDecline = async (contentId) => {
    try {
      const response = await axios.patch(`http://localhost:3001/content/${contentId}`, { status: 'declined' });
      setContentData(contentData.map((content) => (content.id === contentId ? response.data : content)));
    } catch (error) {
      console.error('Error declining content:', error);
      // Handle errors appropriately
    }
  };

  return (
    <ul className="divide-y divide-gray-200">
      {contentData.map((content) => (
        <li key={content.id} className="py-4">
          <div className="flex space-x-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{content.title}</h2>
              <p className="text-gray-500">{content.description}</p>
              <p className="mt-2">Status: {content.status}</p>
            </div>
            {content.status === "pending" && (
              <div className="flex items-center">
                <button
                  onClick={() => handleApprove(content.id)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDecline(content.id)}
                  className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContentList;
