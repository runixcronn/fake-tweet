import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsername,
  setName,
  setAvatar,
  setVerified,
  setLocked,
  setDisplay,
  setText,
  setImage,
  setDate,
  setApp,
  setRetweets,
  setQuotedTweets,
  setLikes,
  fetchTwitterInfo,
} from "../store/tweetSlice";

const TweetSettings = () => {
  const dispatch = useDispatch();
  const {
    user: { username, name, avatar, verified, locked },
    display,
    text,
    image,
    date,
    app,
    retweets,
    quotedTweets,
    likes,
  } = useSelector((state) => state.tweet);

  return (
    <div className="w-full max-w-xs h-full overflow-auto p-6 border-r border-gray-200 bg-white">
      <ul className="space-y-5">
        <li>
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none"
          />
        </li>
        <li>
          <label htmlFor="name" className="block text-sm text-gray-500 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none"
          />
        </li>
        <li>
          <label htmlFor="avatar" className="block text-sm text-gray-500 mb-1">
            Avatar
          </label>
          <input
            type="text"
            id="avatar"
            value={avatar}
            onChange={(e) => dispatch(setAvatar(e.target.value))}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none"
          />
        </li>
        <li>
          <label
            htmlFor="verified"
            className="block text-sm text-gray-500 mb-1"
          >
            Verified
          </label>
          <input
            type="checkbox"
            id="verified"
            checked={verified}
            onChange={(e) => dispatch(setVerified(e.target.checked))}
            className="mr-2"
          />
        </li>
        <li>
          <label htmlFor="locked" className="block text-sm text-gray-500 mb-1">
            Locked
          </label>
          <input
            type="checkbox"
            id="locked"
            checked={locked}
            onChange={(e) => dispatch(setLocked(e.target.checked))}
            className="mr-2"
          />
        </li>
        <li>
          <label htmlFor="display" className="block text-sm text-gray-500 mb-1">
            Display
          </label>
          <select
            name="display"
            id="display"
            value={display}
            onChange={(e) => dispatch(setDisplay(e.target.value))}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none bg-white"
          >
            <option value="default">Default</option>
            <option value="dim">Dim</option>
            <option value="lightsout">Lights out</option>
          </select>
        </li>
        <li>
          <label htmlFor="text" className="block text-sm text-gray-500 mb-1">
            Text
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => dispatch(setText(e.target.value))}
            maxLength="280"
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none resize-none h-24"
          />
        </li>
        <li>
          <label htmlFor="image" className="block text-sm text-gray-500 mb-1">
            Images
          </label>
          <textarea
            id="image"
            value={image}
            placeholder="Comma separated"
            onChange={(e) => {
              const value = e.target.value;
              dispatch(setImage(value ? value.split(",") : []));
            }}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none resize-none h-24"
          />
        </li>
        <li>
          <label htmlFor="date" className="block text-sm text-gray-500 mb-1">
            Date
          </label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => dispatch(setDate(e.target.value))}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none"
          />
        </li>
        <li>
          <label htmlFor="app" className="block text-sm text-gray-500 mb-1">
            App
          </label>
          <input
            type="text"
            id="app"
            value={app}
            onChange={(e) => dispatch(setApp(e.target.value))}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none"
          />
        </li>
        <li>
          <label
            htmlFor="retweets"
            className="block text-sm text-gray-500 mb-1"
          >
            Retweets
          </label>
          <input
            type="number"
            id="retweets"
            value={retweets}
            onChange={(e) => dispatch(setRetweets(parseInt(e.target.value)))}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none"
          />
        </li>
        <li>
          <label
            htmlFor="quotedTweets"
            className="block text-sm text-gray-500 mb-1"
          >
            Quoted Tweets
          </label>
          <input
            type="number"
            id="quotedTweets"
            value={quotedTweets}
            onChange={(e) =>
              dispatch(setQuotedTweets(parseInt(e.target.value)))
            }
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none"
          />
        </li>
        <li>
          <label htmlFor="likes" className="block text-sm text-gray-500 mb-1">
            Likes
          </label>
          <input
            type="number"
            id="likes"
            value={likes}
            onChange={(e) => dispatch(setLikes(parseInt(e.target.value)))}
            className="w-full p-2 border-b border-gray-300 focus:border-gray-500 outline-none"
          />
        </li>
        <li>
          <button
            onClick={() => dispatch(fetchTwitterInfo())}
            className="w-full h-10 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            Fetch Last Tweet
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TweetSettings;
