import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const eye = <FontAwesomeIcon icon={faEye} />;

export default function LoginFormComp() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          ref={register({ required: "This is required." })}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <div className="password-texts">
          <div className="form-password-title">
            <Form.Label>Password</Form.Label>
          </div>
          <div className="text-right">
            <Form.Text className="form-password-forgot">
              <p className="green">Forgot Password</p>
            </Form.Text>
          </div>
        </div>
        <div className="pass-wrapper">
          <input
            placeholder="Password"
            name="password"
            type={passwordShown ? "text" : "password"}
            ref={register({ required: "This is required." })}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
      </Form.Group>
    </Form>
  );
}
