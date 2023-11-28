import React from "react";
import "./videoPage.css";

const videoPage = () => {
  return (
    <div className="Page_Container">
      <video className="Video_Feed" autoPlay controls src="http://192.168.137.216:5000">
        
      </video>
    </div>
  );
};

export default videoPage;
