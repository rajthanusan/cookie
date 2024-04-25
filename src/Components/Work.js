import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Select Your Meals",
      text: "Choose from a variety of delicious and healthy meals. Personalize your menu to suit your taste and dietary preferences.",
    },
    {
      image: ChooseMeals,
      title: "Flexible Meal Plans",
      text: "Select how often you want your meals delivered. Whether it's daily, weekly, or monthly, we've got you covered.",
    },
    {
      image: DeliveryMeals,
      title: "Speedy Deliveries",
      text: "Enjoy fast and reliable meal deliveries. We ensure your meals are delivered fresh and on time, every time.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="w">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Experience our streamlined process. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. We prioritize efficiency to ensure
          seamless operations and exceptional service.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
