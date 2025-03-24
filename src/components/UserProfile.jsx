import React from "react";
import { useSelector } from "react-redux";
import Twemoji from "react-twemoji";
import { Verified, Lock } from "./icons";

const UserProfile = () => {
  const { username, name, avatar, verified, locked } = useSelector(
    (state) => state.tweet.user
  );

  return (
    <div className="flex items-start mb-3">
      <div className="mr-3">
        <img
          className="h-12 w-12 rounded-full cursor-pointer"
          src={avatar}
          alt={`${name} avatar`}
        />
      </div>
      <div className="flex-1 pt-0.5">
        <div className="flex justify-between items-start">
          <div className="font-bold">
            <Twemoji options={{ className: "twemoji-sm" }} className="inline">
              <span className="hover:underline cursor-pointer">{name}</span>
            </Twemoji>
            {verified && (
              <span className="ml-1 inline-block relative top-1">
                <Verified />
              </span>
            )}
            {locked && !verified && (
              <span className="ml-1 inline-block relative top-1">
                <Lock />
              </span>
            )}
          </div>
        </div>
        <div className="text-gray-500 cursor-pointer">@{username}</div>
      </div>
    </div>
  );
};

export default UserProfile;
