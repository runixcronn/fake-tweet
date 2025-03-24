import React from "react";
import { useSelector } from "react-redux";

const TweetStats = () => {
  const retweets = useSelector((state) => state.tweet.retweets);
  const quotedTweets = useSelector((state) => state.tweet.quotedTweets);
  const likes = useSelector((state) => state.tweet.likes);

  const rts = parseInt(retweets);
  const quotes = parseInt(quotedTweets);
  const likesCount = parseInt(likes);

  if (rts === 0 && quotes === 0 && likesCount === 0) {
    return null;
  }

  return (
    <div className="py-3 border-b border-gray-200 text-gray-500">
      {rts !== 0 && (
        <span className="hover:underline cursor-pointer mr-5">
          <strong className="text-black">{styleNumber(retweets)}</strong>{" "}
          {getText("Retweet", rts)}
        </span>
      )}
      {quotes !== 0 && (
        <span className="hover:underline cursor-pointer mr-5">
          <strong className="text-black">{styleNumber(quotedTweets)}</strong>{" "}
          {getText("Quoted Tweet", quotes)}
        </span>
      )}
      {likesCount !== 0 && (
        <span className="hover:underline cursor-pointer">
          <strong className="text-black">{styleNumber(likes)}</strong>{" "}
          {getText("Like", likesCount)}
        </span>
      )}
    </div>
  );
};

const styleNumber = (num) => {
  let div = num / 1000000;
  if (div >= 1) {
    return (
      div.toFixed(1).replace(/([0-9]+(\.?[0-9]+[1-9])?)(\.[0]+$)/, "$1") + "M"
    );
  }
  div = num / 1000;
  if (div >= 1) {
    return (
      div.toFixed(1).replace(/([0-9]+(\.?[0-9]+[1-9])?)(\.[0]+$)/, "$1") + "K"
    );
  }
  return num;
};

const getText = (text, count) => {
  return count === 1 ? text : text + "s";
};

export default TweetStats;
