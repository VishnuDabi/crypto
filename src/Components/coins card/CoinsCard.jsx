import React from "react";
import "./coins-card.css";
const CoinsCard = () => {
  return (
    <section className="usercoins__card">
      <div className="user__coins__container">
        <div className="coin__card">
          {/* <img src="jsh" alt="sdds" /> */}
          <h2>{"$1502"}</h2>
          <span>45% </span>
        </div>
        <div className="coin__card">
          <h2>{"$1502"}</h2>
          <span>45% </span>
        </div>
        <div className="coin__card">
          <h2>{"$1502"}</h2>         
          <span>45% </span>
        </div>
        <div className="coin__card">
          <h2>{"$1502"}</h2>
          <span>45% </span>
        </div>
      </div>
    </section> 
  );
};

export default CoinsCard;
