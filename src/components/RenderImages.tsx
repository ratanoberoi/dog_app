import React, { useState, useEffect } from "react";
import fetchImages from "../services/fetchImages";

interface RenderImagesProps {
  selectedBreed: string;
}

const RenderImages = ({ selectedBreed }: RenderImagesProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (selectedBreed) {
      setLoading(true);
      fetchImages(selectedBreed).then(({ message }) => {
        setImages(message);
        setLoading(false);
      });
    }
  }, [selectedBreed]);

  if (loading) {
    return <div className="spinner" />;
  }
  if (selectedBreed) {
    return (
      <div className="image-container">
        {images.map((image) => (
          <img src={image} width={"24%"} height={300} key={image} />
        ))}
      </div>
    );
  }

  return null;
};

export default RenderImages;
