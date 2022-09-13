import React, { useRef, useEffect, useState } from "react";
import { Rose } from "./Roses.styles";

export const RoseLeft = () => {
  // const roseRef = useRef();
  // const [isVisible, setIsVisible] = useState(false);
  // const [prevScroll, setPrevScroll] = useState(0);
  // const [currentScroll, setCurrentScroll] = useState(0);

  // const observerFunc = (entries) => {
  //   const [entry] = entries;
  //   setIsVisible(entry.isIntersecting);
  // };

  // const observerOptions = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.05,
  // };

  // const scrollHandler = () => {
  //   if (isVisible) {
  //     console.log("hello!");
  //     const roseDistanceFromTop =
  //       roseRef.current.getBoundingClientRect().top - window.scrollY;

  //     setCurrentScroll(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   // console.log(window.scrollY);
  //   // console.log(roseRef.current.getBoundingClientRect());
  //   const scroll = new LocomotiveScroll({
  //     el: roseRef.current,
  //     smooth: true,
  //   });
  //   window.addEventListener("scroll", scrollHandler);
  //   const observer = new IntersectionObserver(observerFunc, observerOptions);
  //   if (roseRef.current) observer.observe(roseRef.current);
  //   return () => {
  //     if (roseRef.current) {
  //       observer.unobserve(roseRef.current);
  //       window.removeEventListener("scroll", scrollHandler);
  //     }
  //   };
  // }, [roseRef, observerOptions]);

  return (
    <Rose
      width="190"
      height="405"
      viewBox="0 0 190 405"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="left-rose"
      // ref={roseRef}
    >
      <rect
        y="56.0442"
        width="40"
        height="111"
        rx="8"
        transform="rotate(-45 0 56.0442)"
        fill="#E13357"
      />
      <rect
        x="106.497"
        width="40"
        height="111"
        rx="8"
        transform="rotate(20 106.497 0)"
        fill="#E13357"
      />
      <rect
        x="38.533"
        y="13.6808"
        width="40"
        height="111"
        rx="8"
        transform="rotate(-20 38.533 13.6808)"
        fill="#E13357"
      />
      <path
        d="M109.466 157L75.033 131L60.033 116L58.033 113.5L109.466 95.3708L109.466 157Z"
        fill="#E13357"
      />
      <path
        d="M106.553 148.134C107.04 152.029 115.529 160.478 118.34 163.288C124.539 169.487 132.193 174.327 137.703 181.062C144.308 189.134 151.109 195.467 157.067 204.073C162.947 212.567 167.336 222.963 171.472 232.417C184.644 262.524 187.375 293.66 187.375 326.241C187.375 342.093 185.739 356.749 181.481 372.077C179.59 378.885 177.298 399.004 170.537 402.385"
        stroke="#E13357"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Rose>
  );
};

export const RoseRight = () => (
  <Rose
    width="194"
    height="443"
    viewBox="0 0 194 443"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="right-rose"
  >
    <rect
      x="38.4422"
      y="52.6643"
      width="40"
      height="111"
      rx="8"
      transform="rotate(-25 38.4422 52.6643)"
      fill="#E13357"
    />
    <rect
      x="157.685"
      y="36.4242"
      width="40"
      height="111"
      rx="8"
      transform="rotate(40 157.685 36.4242)"
      fill="#E13357"
    />
    <rect
      x="89.1406"
      y="26.0348"
      width="40"
      height="111"
      rx="8"
      fill="#E13357"
    />
    <path
      d="M106.778 184.971L83.3138 148.763L74.3487 129.537L73.3244 126.504L127.856 127.059L106.778 184.971Z"
      fill="#E13357"
    />
    <path
      d="M106 180C105.601 188.331 101.588 197.438 98.9524 205.23C95.5544 215.277 92.0232 225.026 87.5489 234.598C81.2817 248.005 74.124 260.789 71.8386 275.814C68.0876 300.475 71.6429 326.392 71.6429 351.199C71.6429 365.405 71.8936 379.567 70.8108 393.692C70.3273 399.999 69 406.311 69 412.589C69 422.089 69 450.588 69 441.088"
      stroke="#E13357"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </Rose>
);
