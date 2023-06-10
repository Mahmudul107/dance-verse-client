import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  return (
    <div>
      <AwesomeSlider infinite={true}>
        <div>
          <img
            className="w-screen h-min"
            src="https://images.unsplash.com/photo-1533106958148-daaeab8b83fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
          <div className="text-white text-center text-2xl md:text-5xl absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="whitespace-nowrap"><i>Experience the Magic of Movement and Expression</i></p>
            <button className="btn-sm bg-white md:btn mt-6 hover:bg-red-400 duration-900 text-black hover:text-white border-none">
              Explore Now
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-screen"
            src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="text-white text-center text-2xl md:text-5xl absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="whitespace-nowrap"><i>Dance and Let Your Body Tell Your Story</i></p>
            <button className="btn-sm bg-white md:btn mt-6 hover:bg-red-400 text-black hover:text-white border-none duration-700">
              Explore Now
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-screen"
            src="https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="text-white text-center text-2xl md:text-5xl absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="whitespace-nowrap"><i>Immerse Yourself in the Beauty of Dance</i></p>
            <button className="btn-sm bg-white md:btn mt-6 hover:bg-red-400 text-black hover:text-white border-none duration-700">
              Explore Now
            </button>
          </div>
        </div>
        <div>
          <img
            className="w-screen"
            src="https://images.unsplash.com/photo-1550026593-cb89847b168d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="text-white text-center text-2xl md:text-5xl absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="whitespace-nowrap"><i>Feel the Energy and Dance to the Rhythm of Your Heart</i></p>
            <button className="btn-sm bg-white md:btn mt-6 hover:bg-red-400 text-black hover:text-white border-none duration-700">
              Explore Now
            </button>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
