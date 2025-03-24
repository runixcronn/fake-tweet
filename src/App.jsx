import React from "react";
import Tweet from "./components/Tweet";
import FetchTweet from "./components/FetchTweet";
import TweetSettings from "./components/TweetSettings";
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <TweetSettings />
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-xl">
          <FetchTweet />
          <Tweet />
        </div>
      </div>
    </div>
  );
}

export default App;
