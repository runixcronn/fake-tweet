import React from "react";
import { useSelector } from "react-redux";
import useText from "../hooks/useText";
import useImage from "../hooks/useImage";

const TweetContent = () => {
  const text = useSelector((state) => state.tweet.text);
  const imageArray = useSelector((state) => state.tweet.image);

  const processedText = useText(text);
  const image = useImage(imageArray);

  return (
    <div className="mt-1 mb-3">
      {processedText && <div className="text-xl mb-3">{processedText}</div>}
      <ImagesContainer image={image} />
    </div>
  );
};

const ImagesContainer = ({ image }) => {
  switch (image.length) {
    case 1:
      return (
        <div className="mt-2 mb-2 cursor-pointer">
          <img
            src={image[0]}
            alt=""
            className="rounded-2xl border border-gray-300 w-full"
          />
        </div>
      );
    case 2:
      return (
        <div className="mt-2 mb-2 w-full h-80 rounded-2xl border border-gray-300 flex">
          <OneImageColumn side="left" image={image[0]} />
          <div className="w-0.5 h-full bg-gray-300" />
          <OneImageColumn side="right" image={image[1]} />
        </div>
      );
    case 3:
      return (
        <div className="mt-2 mb-2 w-full h-80 rounded-2xl border border-gray-300 flex">
          <OneImageColumn side="left" image={image[0]} />
          <div className="w-0.5 h-full bg-gray-300" />
          <TwoImagesColumn side="right" image1={image[1]} image2={image[2]} />
        </div>
      );
    case 4:
      return (
        <div className="mt-2 mb-2 w-full h-80 rounded-2xl border border-gray-300 flex">
          <TwoImagesColumn side="left" image1={image[0]} image2={image[1]} />
          <div className="w-0.5 h-full bg-gray-300" />
          <TwoImagesColumn side="right" image1={image[2]} image2={image[3]} />
        </div>
      );
    default:
      return null;
  }
};

const OneImageColumn = ({ side, image }) => {
  side = side === "right" || side === "left" ? side : "left";

  return (
    <div
      className={`w-1/2 h-full overflow-hidden ${
        side === "left" ? "rounded-l-2xl" : "rounded-r-2xl"
      }`}
    >
      <img src={image} alt="" className="h-full w-full object-cover" />
    </div>
  );
};

const TwoImagesColumn = ({ side, image1, image2 }) => {
  side = side === "right" || side === "left" ? side : "left";

  return (
    <div className="w-1/2 h-full flex flex-col">
      <div
        className={`h-1/2 overflow-hidden ${
          side === "left" ? "rounded-tl-2xl" : "rounded-tr-2xl"
        }`}
      >
        <img src={image1} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="h-0.5 w-full bg-gray-300" />
      <div
        className={`h-1/2 overflow-hidden ${
          side === "left" ? "rounded-bl-2xl" : "rounded-br-2xl"
        }`}
      >
        <img src={image2} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default TweetContent;
