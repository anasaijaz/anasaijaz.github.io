import React from "react";

const VideoPill = ({ videoUrl }) => {
  return (
    <div className="w-[80px] md:w-[200px] rounded-full overflow-hidden bg-blue-500">
      <video
        loop
        autoPlay
        muted
        className="w-full h-auto"
        src={videoUrl}
        controls={false}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPill;
