import React from "react";
import styles from "../styles/Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

const Carousel = () => {
  const testimonials = [
    {
      name: "Jack F",
      detail: "Ex Blackrock PM",
      para: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
    },
    {
      name: "Yash P",
      detail: "Research, 3poch Crypto Hedge Fund",
      para: `I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!`,
    },
    {
      name: "Shiv S",
      detail: "Co-Founder Magik Labs",
      para: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
    },
  ];

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {testimonials.map((value, index) => {
          let testimonialCardContent = {
            name: value.name,
            detail: value.detail,
            para: value.para,
          };

          return (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
              data-bs-interval="3000"
            >
              <TestimonialCard value={testimonialCardContent} />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
