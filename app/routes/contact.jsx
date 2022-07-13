/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react"
import { useActionData, Form, useTransition } from "@remix-run/react";
import { Alert, Container } from "react-bootstrap";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const emailValid = email && emailRegex.test(email) ? null : "Invalid email"

  const errors = {
    name: name ? null : "Name is required",
    email: email ? emailValid : "Email is required",
    message: message ? null : "Message is required",
  };
  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  );
  if (hasErrors) {
    return {
      errors
    }
  }

  return fetch("https://formbold.com/s/9kn06", {
    method: "POST",
    body: formData,
  })
  .then(() => ({success: true}))
  .catch(error => {
    console.error(error)
    return {
      failure: true
    }
  })
};

const Contact = () => {
  const transition = useTransition();
  const actionData = useActionData();
  const errors = actionData?.errors
  const success = actionData?.success
  const failure = actionData?.failure
  const [showSuccess, setShowSuccess] = useState(!!success)
  const [showError, setShowError] = useState(!!failure)

  useEffect(() => {
    setShowError(!!failure)
    setShowSuccess(!!success)
  }, [success, failure])
  return (
    <Container className="mt-3">
      <Form method="post" noValidate action="/contact">
        <fieldset disabled={transition.state === "submitting"}>
          <div className="form-group mb-3">
            <div className="form-floating">
              <input
                name="name"
                id="name"
                type="text"
                className={`form-control ${errors?.name ? 'is-invalid' : ''} ${(success || failure) && !errors?.name ? 'is-valid' : ''}`}
                placeholder="Enter your name here"
              />
              <label htmlFor="name">Name</label>
              {errors?.name ? (
                <div className="invalid-feedback">{errors.name}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="form-floating">
              <input
                name="email"
                id="email"
                type="email"
                className={`form-control ${errors?.email ? 'is-invalid' : ''} ${(success || failure) && !errors?.email ? 'is-valid' : ''}`}
                placeholder="Enter your email here"
              />
              <label htmlFor="email">Email</label>
              {errors?.email ? (
                <div className="invalid-feedback">{errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="form-floating">
              <textarea
                name="message"
                id="message"
                style={{ height: "14rem" }}
                className={`form-control ${errors?.message ? 'is-invalid' : ''} ${(success || failure) && !errors?.message ? 'is-valid' : ''}`}
                placeholder="Enter your message here"
              />
              <label htmlFor="message">Message</label>
              {errors?.message ? (
                <div className="invalid-feedback">{errors.message}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group mb-3">
            <button className="btn btn-primary" type="submit">
            {transition.state === "submitting"
              ? "Submitting..."
              : "Submit"}
            </button>
          </div>
        </fieldset>
      </Form>
      <Alert show={showError} className="mt-3" variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Uh oh! An error occurred!</Alert.Heading>
          <p>
            Try submitting again, if that doesn&apos;t work, email Brooke directly at
            {" "}
            <Alert.Link href="mailto:me@brookero.se">me@brookero.se</Alert.Link>
          </p>
        </Alert>
        <Alert show={showSuccess} className="mt-3" variant="success" onClose={() => setShowSuccess(false)} dismissible>
          <Alert.Heading>Successful Submission!</Alert.Heading>
          <p>Check back in a day if I haven&apos;t responded to you, and have a nice day!</p>
        </Alert>
    </Container>
  );
};

export default Contact;
