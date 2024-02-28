import React from "react";


export const CarouselItem = ({ item, width }) => {
  return (
    <div className="mt-2 carousel-item flex flex-col" style={{ width: width }}>
      <h3 className="carousel-item-text text-white font-bold text-[32px]">{item.title}</h3>
      <div className="flex-1 flex flex-col">
        <p className="mt-2 carousel-item-text tracking-wider text-[18px]">{item.description}</p>
        <p className="carousel-item-text text-white font-medium text-[16px]">
          <span className="blue-text-gradient">Mentor </span> {item.mentor}
        </p>
        <p className="carousel-item-text text-secondary text-[12px]"> {item.designation} of {item.institution} </p>
      </div>

    </div>
  );
};