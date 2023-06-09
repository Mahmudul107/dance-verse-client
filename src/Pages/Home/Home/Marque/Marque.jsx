import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="flex w-4/5 mx-auto">
      <button className="bg-red-400 btn"></button>
      <Marquee
        className="text-red-500 text-2xl"
        gradient={true}
        pauseOnHover={true}
        autoFill={true}
        speed={80}
      >
        Join our Dance Verse and Embark on a Journey of Passion, Grace, and
        Artistic Expression. Explore a World of Rhythm, Movement, and Joyful
        Performances. Unleash Your Potential and Dance to Your Heart's Content!
      </Marquee>
    </div>
  );
};

export default Marque;
