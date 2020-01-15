import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputField from "../Common/InputField";
import { loginStyles } from "./loginStyles";
import { bindActionCreators } from "redux";
import { setCurrentUser } from "../../redux/user/userAction";
import { connect } from "react-redux";
import { FormHelperText } from "@material-ui/core";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const { setCurrentUser } = this.props;
    setCurrentUser(email, password);
  };

  render() {
    const { classes, errorMessage } = this.props;
    const { email, password } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <InputField
              value={email}
              id="email"
              label="Email Address"
              name="email"
              type="email"
              onChange={this.handleChange}
            />
            <InputField
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
            <FormHelperText id="component-error-text">
              <span className="error" role="alert" style={{ color: "red" }}>
                {errorMessage}
              </span>
            </FormHelperText>
            <Button
              onClick={this.handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.loadReducer.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCurrentUser }, dispatch);
};

export default withStyles(loginStyles)(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
