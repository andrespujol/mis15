import React from "react";

const ParallaxContainer = ({
  bgImage,
  children,
  className = "",
  overlay = false,
}) => {
  return (
    <div
      className={`relative w-full h-full bg-cover bg-center bg-no-repeat 
                  bg-scroll 
                  md:bg-fixed 
                  ${className}`}
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : "none",
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}

      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default ParallaxContainer;
