import React from "react";
import { Alert, AlertHeading, AlertDescription } from "reactstrap";
import { useAlertContext } from "./alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function AlertComponent() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    <Alert color={isSuccess ? 'success' : 'danger'} isOpen={isOpen}>
      <AlertHeading>{isSuccess ? 'All good!' : 'Oops!'}</AlertHeading>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

export default AlertComponent;