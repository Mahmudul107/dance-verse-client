import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <div>
      <AwesomeSlider>
        <div>
            <img className="w-screen" src="https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" />
        </div>
        <div>
            <img className="w-screen" src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div>
            <img className="w-screen" src="https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        <div>
            <img className="w-screen" src="https://images.unsplash.com/photo-1550026593-cb89847b168d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
