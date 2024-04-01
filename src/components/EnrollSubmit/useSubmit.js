import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It now always simulates a successful submission
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);
      const simulatedResponse = {
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      };
      console.log("Simulated API Response:", simulatedResponse); // Log the simulated response
      setResponse(simulatedResponse);
    } catch (error) {
      const errorMessage = {
        type: 'error',
        message: 'Something went wrong, please try again later!',
      };
      console.log("Error occurred during API call:", errorMessage); // Log the error message
      setResponse(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;