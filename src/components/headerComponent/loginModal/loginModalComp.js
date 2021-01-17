import React from "react";
import { Button, Modal } from "react-bootstrap";
import LoginFormComp from "./loginFormComp";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4 className="text-center sign-in-text">Sign in</h4>
        <div>
          <LoginFormComp />
        </div>
      </Modal.Body>
      <div className="text-center login-button">
        <Button className="green" onClick={props.onHide}>
          Login
        </Button>
      </div>
      <Form.Text className="text-muted text-center">
        <p className="green">I don't have an account</p>
      </Form.Text>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
