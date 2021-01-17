import React from "react";
import Form from "react-bootstrap/Form";

export default function LoginFormComp() {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <div className="password-texts">
          <div className="form-password-title">
            <h6>Password</h6>
          </div>
          <div className="text-right">
            <Form.Text className="form-password-forgot">
              <p className="green">Forgot Password</p>
            </Form.Text>
          </div>
        </div>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}
