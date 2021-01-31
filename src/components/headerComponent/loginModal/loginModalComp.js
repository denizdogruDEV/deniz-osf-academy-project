import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const eye = <FontAwesomeIcon icon={faEye} />;
function MyVerticallyCenteredModal(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {
    register,
    errors,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="text-center sign-in-text">Sign in</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form">
            <p>Email</p>
            <div className="pass-wrapper">
              <input
                className="email-form"
                placeholder="E-mail"
                name="email"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />{" "}
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}

            <div className="forgot">
              <p>Password</p>
              <p className="green">Forgot Password</p>
            </div>
            <div className="pass-wrapper">
              <input
                className="email-form"
                placeholder="Password"
                name="password"
                type={passwordShown ? "text" : "password"}
                ref={register({
                  required: "Required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },

                  pattern: {
                    value: /^0|[1-9]\d*$/,
                    message:
                      "Password must contain 1 numeric, 1 uppercase letter, 1 special character",
                  },
                })}
              />
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}

            <div className="text-center login-button">
              <Button
                type="submit"
                variant="success"
                onClick={handleSubmit(onSubmit)}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>

      <Form.Text className="text-muted text-center">
        <p className="green">I don't have an account</p>
      </Form.Text>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
