import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert, Card } from "reactstrap";
import "./school-registration.css";

const SchoolRegistrationForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    contactPerson: "",
    position: "",
    email: "",
    phone: "",
    schoolSize: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(formData);
    setSubmitted(true);
  };

  if (!showForm) {
    return (
      <Card body className="text-center registration-card">
        <h3>Register Your School</h3>
        <p>
          Join our network of partner schools and bring coding education to
          your students.
        </p>
        <Button 
          color="primary" 
          size="lg" 
          onClick={() => setShowForm(true)}
        >
          Register Now
        </Button>
      </Card>
    );
  }

  return (
    <div className="registration-form-container">
      {submitted ? (
        <Alert color="success">
          Thank you for your interest! We will contact you shortly.
        </Alert>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="schoolName">School Name*</Label>
            <Input
              type="text"
              name="schoolName"
              id="schoolName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="contactPerson">Contact Person*</Label>
            <Input
              type="text"
              name="contactPerson"
              id="contactPerson"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="position">Position*</Label>
            <Input
              type="text"
              name="position"
              id="position"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email*</Label>
            <Input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number*</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="schoolSize">Number of Students</Label>
            <Input
              type="select"
              name="schoolSize"
              id="schoolSize"
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="<100">Less than 100</option>
              <option value="100-500">100-500</option>
              <option value="501-1000">501-1000</option>
              <option value=">1000">More than 1000</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="message">Additional Information</Label>
            <Input
              type="textarea"
              name="message"
              id="message"
              onChange={handleChange}
            />
          </FormGroup>
          <div className="button-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button color="primary" type="submit" style={{ padding: '0.5rem 1rem' }}>
              Submit Registration
            </Button>
            <Button 
              color="secondary" 
              className="mt-2" 
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default SchoolRegistrationForm; 