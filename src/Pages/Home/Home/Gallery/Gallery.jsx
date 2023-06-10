import React from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div className="mb-24">
        <div className="w-[800px] mx-auto divider mt-14"></div>
        <h1 className="text-6xl text-center font-bold"><i>You're a good dancer, We know it</i></h1>
        <div className="w-[800px] mx-auto divider mb-24"></div>
        <Marquee
        // gradient={true}
        // gradientColor={[255, 255, 255]}
        // pauseOnHover={true}
        autoFill={true}
        speed={40}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1590050630581-f1c3753d7e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1602868223267-1c32726adfc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1593769665146-1116a2bdfbab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1507539989371-99615e449486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=962&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1524330685423-3e1966445abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1529154547048-4d1e71e6a760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=391&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1573173262790-080d45c358cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1542596827-4559ae8ffdbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1526631738724-8fd595a8c1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1515080797068-528074601098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1563775957449-d52dbc9aac1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
    </Marquee>
    </div>
  );
};

export default Gallery;
