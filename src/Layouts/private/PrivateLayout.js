import React from "react";
import MenuAppBar from "../../Components/Common/AppBar";

const PrivateLayout = props => {
  return (
    <div>
      <MenuAppBar auth={true} />
      {props.children}
    </div>
  );
};

export default PrivateLayout;
