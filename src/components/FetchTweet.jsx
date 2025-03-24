import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, fetchTwitterInfo } from "../store/tweetSlice";

const FetchTweet = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.tweet.user.username);

  return (
    <div className="flex items-center mb-4 space-x-2">
      <input
        type="text"
        value={username}
        placeholder="Please type twitter username"
        onChange={(e) => dispatch(setUsername(e.target.value))}
        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        onClick={() => dispatch(fetchTwitterInfo())}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Fetch Last Tweet
      </button>
    </div>
  );
};

export default FetchTweet;
