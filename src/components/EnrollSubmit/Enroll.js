import React from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row, FormFeedback } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FullScreenSection from "./FullScreenSection";

const Enroll = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      country: "",
      selectedCourse: "",
      isRegistering: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone Number is required"),
      country: Yup.string().required("Country is required"),
      selectedCourse: Yup.string().required("Select a Course is required"),
    }),

    onSubmit: () => {
      // Form submission will be handled by Netlify Forms
    },
  });

  return (
    <FullScreenSection isDarkBackground backgroundColor="#02fff244" py={16} spacing={8}>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h1>Enroll for a course</h1>
          <p>Note: You can register for yourself or on behalf of a LEARNER</p>
          <Form className="form" name="enroll-form" method="POST" data-netlify="true">
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName && <FormFeedback>{formik.errors.firstName}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                invalid={formik.touched.email && formik.errors.email}
              />
              {formik.errors.email && <FormFeedback>{formik.errors.email}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.phone}
                invalid={formik.touched.phone && formik.errors.phone}
              />
              {formik.errors.phone && <FormFeedback>{formik.errors.phone}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                id="country"
                name="country"
                type="select"
                onChange={formik.handleChange}
                value={formik.values.country}
                invalid={formik.touched.country && formik.errors.country}
              >
                <option value="">Select Country</option>
                <option value="GH">Ghana</option>
                <option value="CI">Cote d'Ivoire</option>
                <option value="NG">Nigeria</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="OTHER">Other</option>
              </Input>
              {formik.errors.country && <FormFeedback>{formik.errors.country}</FormFeedback>}
            </FormGroup>
            <FormGroup>
              <Label for="selectedCourse">Select a Course</Label>
              <Input
                id="selectedCourse"
                name="selectedCourse"
                type="select"
                onChange={formik.handleChange}
                value={formik.values.selectedCourse}
                invalid={formik.touched.selectedCourse && formik.errors.selectedCourse}
              >
                <option value="">Select a Course</option>
                <option value="python">Python Programming for Beginners</option>
                <option value="scratch">Scratch (Recommended for Juniors)</option>
                <option value="webDev">Web Development for Beginners</option>
              </Input>
              {formik.errors.selectedCourse && <FormFeedback>{formik.errors.selectedCourse}</FormFeedback>}
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  id="isRegistering"
                  name="isRegistering"
                  onChange={formik.handleChange}
                  checked={formik.values.isRegistering}
                />{' '}
                Are you registering on behalf of a learner?
              </Label>
            </FormGroup>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </FullScreenSection>
  );
};

export default Enroll;
