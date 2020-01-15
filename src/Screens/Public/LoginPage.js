import React from "react";
import Login from "../../Components/Public/Login";
import { connect } from "react-redux";
import Loader from "../../Components/Common/Loader";

const LoginPage = ({ isLoaded }) => {
  return isLoaded ? <Login /> : <Loader />;
};

const mapStateToProps = state => {
  return {
    isLoaded: state.loadReducer.isLoaded
  };
};

export default connect(mapStateToProps)(LoginPage);
