import React from "react";
import "./videoPage.css";

const videoPage = () => {
  return (
    <div className="Page_Container">
      <iframe className="Video_Feed" src="http://192.168.127.210:5000"></iframe>
    </div>
  );
};

export default videoPage;
