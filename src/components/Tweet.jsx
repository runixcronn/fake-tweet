import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import TweetContent from "./TweetContent";
import TweetMetadata from "./TweetMetadata";
import TweetStats from "./TweetStats";
import TweetActions from "./TweetActions";
import useDisplay from "../hooks/useDisplay";

const Tweet = () => {
  const display = useSelector((state) => state.tweet.display);
  const processedDisplay = useDisplay(display);

  return (
    <div
      className={`w-full max-w-xl border border-gray-200 rounded-lg p-4 bg-white ${processedDisplay}`}
    >
      <UserProfile />
      <TweetContent />
      <TweetMetadata />
      <TweetStats />
      <TweetActions />
    </div>
  );
};

export default Tweet;
