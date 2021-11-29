import ImageData from "./ImageData";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const previousSlide = () => {
    if (current === 0) {
      setCurrent(ImageData.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const nextSlide = () => {
    if (current === ImageData.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <section className="slider">
      <FiArrowLeft className="leftArrow" onClick={previousSlide} />
      {ImageData.map((data, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img src={data.image} alt={data.title} className="image" />
                <p>{data.title}</p>
              </div>
            )}
          </div>
        );
      })}
      <FiArrowRight className="rightArrow" onClick={nextSlide} />
    </section>
  );
};
export default ImageSlider;
