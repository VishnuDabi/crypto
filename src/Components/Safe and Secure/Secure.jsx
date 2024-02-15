import React, { useEffect, useRef, useState } from "react";
import "./secure.css";
const Secure = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } // Trigger when 50% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <article className="secure__main__container">
      <div
        className={`secure__container ${isVisible ? "slide-up" : ""}`}
        ref={elementRef}
      >
        <div className="secure__flex__container">
          <div className="w__50 secure__container__txt  ">
            <h1>
              Powerful mining invest with
              <span className="text__aqua"> Safe & Secure</span>
            </h1>
            <p>
              We all have our own techniques, but one of the most effective
              techniques is to actually put some text where text goes and some
              pictures where pictures go to make sure everyone can see the
              vision you’ve created.
            </p>
            <h4>
              Estimated Mingin Digit
              <br />
              10092050.0145 / BTC
            </h4>
          </div>
          <div>
            <img
              className="img"
              src="https://crypto-admin-templates.multipurposethemes.com/sass/bs5/images/front-end-img/invest_ilust1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Secure;
