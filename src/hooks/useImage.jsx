import { useState, useEffect } from "react";

function useImage(rawImage) {
  const [image, setImage] = useState([]);
  useEffect(() => {
    let imgArray;
    if (!rawImage) {
      imgArray = [];
    } else if (typeof rawImage === "string") {
      imgArray = [rawImage];
    } else if (Array.isArray(rawImage)) {
      imgArray = rawImage;
    } else {
      imgArray = [];
    }
    setImage(imgArray);
  }, [rawImage]);
  return image;
}

export default useImage;
