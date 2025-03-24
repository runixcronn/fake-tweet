import React from "react";
import { useSelector } from "react-redux";

const TweetMetadata = () => {
  const date = useSelector((state) => state.tweet.date);
  const app = useSelector((state) => state.tweet.app);

  return (
    <div className="text-gray-500 pb-3 border-b border-gray-200">
      {date} · <span className="hover:underline cursor-pointer">{app}</span>
    </div>
  );
};

export default TweetMetadata;
