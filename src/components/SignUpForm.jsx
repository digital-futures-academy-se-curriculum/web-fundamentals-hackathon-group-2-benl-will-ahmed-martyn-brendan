import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { validateEmail, validateName } from "../utils/validators";

const SignUpForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phone: "",
  });

  const [formValid, setFormValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
  });

  const handleInputChange = (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });

    setFormValid({
      firstName: validateName(userForm.firstName),
      lastName: validateName(userForm.lastName),
      email: validateEmail(userForm.email),
    });

    setDisabled(
      !(Object.values(formValid).every(Boolean) && Object.values(userForm).every(Boolean))
    );
  };

  return (
    <div className="right-side">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Select aria-label="Default select example" name="title">
            <option value="Mrs">Mrs.</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Mr">Mr</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder="First Name"
            value={Form.firstName}
            onChange={handleInputChange}
            required
            name="firstName"
            isInvalid={!formValid.firstName}
          />
          <Form.Control.Feedback type="invalid">
            Only lower and upper case letters allowed, max length 15
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Last Name"
            value={Form.lastName}
            onChange={handleInputChange}
            required
            name="lastName"
            isInvalid={!formValid.lastName}
          />
          <Form.Control.Feedback type="invalid">
            Only lower and upper case letters allowed, max length 15
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            required
            value={Form.email}
            onChange={handleInputChange}
            isInvalid={!formValid.email}
          />
          <Form.Control.Feedback type="invalid">Email address invalid</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label for="dob">Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            id="dob"
            name="dob"
            required
            value={Form.dob}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            placeholder="Phone"
            required
            name="phone"
            value={Form.phone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={disabled}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
