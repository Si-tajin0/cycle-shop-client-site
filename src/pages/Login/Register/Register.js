import React from "react";
import { Alert, Button, Container, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import registerImg from "../../../img/334-3347027_register-icon-png-register-here-logo.png";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { user, registerUser, isLoading, signInWithGoogle, error } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   google login handler
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  // handle on submit
  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, history);
    reset();
  };

  return (
    <Container className="text-center my-5">
      <Row>
        <div className="col-md-6">
          <div
            className="w-75 m-auto p-5 rounded"
            style={{ boxShadow: "0 0 20px rgb(0 0 0 / 15%)" }}
          >
            <h5>CREATE AN ACCOUNT</h5>
            <hr />
            <div className="mb-2">
              <Button variant="primary">
                <FaFacebookF />
              </Button>
              <Button variant="secondary" className="mx-3">
                <FaGithub />
              </Button>
              <Button onClick={handleGoogleSignIn} variant="danger">
                <FaGoogle />
              </Button>
            </div>
            <small>
              <p className="text-muted">Insert your account information:</p>
            </small>
            <div>
              {!isLoading && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  <input
                    className="d-block w-100 rounded p-2 mb-3"
                    {...register("name")}
                    type="name"
                    placeholder="Your name"
                  />
                  <input
                    className="d-block w-100 rounded p-2 mb-3"
                    {...register("email")}
                    type="email"
                    placeholder="Your Email"
                  />

                  {/* include validation with required or other standard HTML validation rules */}
                  <input
                    className="d-block w-100 rounded p-2 mb-3"
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <Button
                    type="submit"
                    className="bg-warning rounded my-3"
                    style={{
                      border: "none",
                      padding: "10px 70px",
                    }}
                  >
                    Register
                  </Button>
                </form>
              )}
              {isLoading && <Spinner animation="border" variant="warning" />}
            </div>
            <div>
              <Link to="/login">
                <small>
                  <p>Already Register? Please LogIn</p>
                </small>
              </Link>
            </div>
            {user?.email && (
              <Alert variant="success">User Register Successfully</Alert>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
        </div>
        <div className="d-flex justify-content-center col-md-6">
          <img className="w-75 img-fluid" src={registerImg} alt="" />
        </div>
      </Row>
    </Container>
  );
};

export default Register;
