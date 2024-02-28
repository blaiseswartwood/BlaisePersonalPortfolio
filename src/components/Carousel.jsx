import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import {SectionWrapper} from '../hoc';
import {researchprojects} from '../constants'


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= researchprojects.length) {
      newIndex = researchprojects.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel w-full bg-black-200 round">
      <div
        className="inner round"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {researchprojects.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {researchprojects.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Carousel, "");