import React, { useEffect, useRef, useState } from "react";
import "./protecting.css";
const Protecting = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
    <article className="protecting__main__container">
      <div
        className={`protecting__container ${isVisible ? "slide-up" : ""}`}
        ref={elementRef}
      >
        <div className="protecting__flex__container">
          <div>
            <img
              className="img"
              src="https://crypto-admin-templates.multipurposethemes.com/sass/bs5/images/front-end-img/app.png"
              alt=""
            />
          </div>
          <div className="w__50 protecting__container__txt  ">
            <h2>
              Protecting Investors
              <span className="text__aqua"> Interests</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h6>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Protecting;
