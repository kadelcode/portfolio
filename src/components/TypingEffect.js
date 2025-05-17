import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  const el = useRef(null);

  //const smile = 😊;

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hi, I'm Ayodele.", `Excited to have you exploring my portfolio 😊!`],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false, // No looping
      once: true,
      showCursor: true, // Initially show cursor
      onComplete: () => {
        document.querySelector(".typed-cursor")?.remove(); // Remove cursor after typing
      }
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} />;
};

export default TypingEffect;
