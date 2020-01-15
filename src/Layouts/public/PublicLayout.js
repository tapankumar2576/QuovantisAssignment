import React from "react";
import MenuAppBar from "../../Components/Common/AppBar";

const PublicLayout = props => {
  return (
    <div>
      <MenuAppBar />
      {props.children}
    </div>
  );
};

export default PublicLayout;
