import React from "react";
import ActivityIndicator from "../../assets/loader.gif";

const wrapperStyle = {
  display: "flex",
  marginTop: "10%",
  justifyContent: "center"
};

const Loader = ({ size = 200 }) => {
  const loaderStyle = {
    height: size,
    width: size
  };
  return (
    <div style={wrapperStyle}>
      <img
        src={ActivityIndicator}
        style={loaderStyle}
        className={`search-loading`}
        alt="loader"
      />
    </div>
  );
};

export default Loader;
