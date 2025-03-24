import React from "react";
import { Comment, Retweet, Like, Share } from "./icons";

const TweetActions = () => {
  const actions = [
    {
      color: "blue",
      icon: <Comment />,
    },
    {
      color: "green",
      icon: <Retweet />,
    },
    {
      color: "red",
      icon: <Like />,
    },
    {
      color: "blue",
      icon: <Share />,
    },
  ];

  return (
    <div className="flex flex-row">
      {actions.map((action, key) => (
        <div key={key} className={`flex-1 h-12 cursor-pointer group`}>
          <div className="flex items-center h-full justify-center">
            <div
              className={`p-2 rounded-full transition-colors duration-200 
                ${
                  action.color === "blue"
                    ? "group-hover:bg-blue-100 group-hover:text-blue-500"
                    : ""
                }
                ${
                  action.color === "green"
                    ? "group-hover:bg-green-100 group-hover:text-green-500"
                    : ""
                }
                ${
                  action.color === "red"
                    ? "group-hover:bg-red-100 group-hover:text-red-500"
                    : ""
                }
              `}
            >
              {React.cloneElement(action.icon, {
                className: `h-5 w-5 fill-current text-gray-500 
                  ${action.color === "blue" ? "group-hover:text-blue-500" : ""}
                  ${
                    action.color === "green" ? "group-hover:text-green-500" : ""
                  }
                  ${action.color === "red" ? "group-hover:text-red-500" : ""}
                `,
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TweetActions;
