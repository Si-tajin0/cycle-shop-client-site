import React from "react";
import { Alert, Button, Container, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import loginImg from "../../../img/login_graphics.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { user, error, loginUser, signInWithGoogle, isLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //   handle submit
  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, history);
    reset();
  };

  //   google login handler
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <Container className="text-center my-5">
      <Row>
        <div className="col-md-6">
          <div
            className="w-75 m-auto p-5 rounded"
            style={{ boxShadow: "0 0 20px rgb(0 0 0 / 15%)" }}
          >
            <h5>LOGIN</h5>
            <hr />
            <small>
              <p className="text-muted">Login using social network:</p>
            </small>
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
              <p className="text-muted">Or Insert your account information:</p>
            </small>
            <div>
              {!isLoading && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
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
                  <Button variant="link" className="text-danger">
                    Forget Password
                  </Button>
                  <br />
                  <Button
                    type="submit"
                    className="bg-warning rounded my-3"
                    style={{
                      border: "none",
                      padding: "10px 70px",
                    }}
                  >
                    LogIn
                  </Button>
                </form>
              )}
              {isLoading && <Spinner animation="border" variant="warning" />}
            </div>
            <div>
              <Link to="/register">
                <small>
                  <p>No account? Create one here</p>
                </small>
              </Link>
              {user?.email && (
                <Alert variant="success">User Register Successfully</Alert>
              )}
              {error && <Alert variant="danger">{error}</Alert>}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-md-6">
          <img src={loginImg} alt="" />
        </div>
      </Row>
    </Container>
  );
};

export default Login;
