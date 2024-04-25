import React from "react";
import ProfilePic from "../Assets/user-image.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="t">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          stumbled upon this food website and decided to give it a try. The
          variety of dishes offered was impressive, and I found exactly what I
          was looking for.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          he food arrived promptly and was delicious beyond words. The customer
          service was exceptional, making the whole experience delightful. I
          highly recommend this website to all food enthusiasts!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>THANUSAN</h2>
      </div>
    </div>
  );
};

export default Testimonial;
