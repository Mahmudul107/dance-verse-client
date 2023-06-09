import React from "react";
import Marquee from "react-fast-marquee";
import logo from "../../../../assets/dancing.png";


const Marque = () => {
  return (
    <div className="flex w-4/5 mx-auto my-20">
      <img className="w-24 h-20 -mr-6" src={logo} alt="" />
      <Marquee
        className="text-white text-2xl bg-gradient-to-r from-purple-500 to-pink-500"
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
