import { useState, useEffect } from "react";

export const useForm = ({ initialValues, validation, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe");
    if (rememberMe) {
      const tmpValues = {};
      tmpValues.rememberMe = true;
      Object.keys(values).forEach((key) => {
        if (key !== "rememberMe") {
          tmpValues[key] = localStorage.getItem(key);
        }
      });
      setValues(tmpValues);
    }
  }, []);

  useEffect(() => {
    Object.keys(values).forEach((key) => {
      if (values.rememberMe) {
        localStorage.setItem(key, values[key]);
      } else {
        localStorage.removeItem(key);
      }
    });
  }, [values]);

  const handleChange = (e) => {
    if (e.target.name === "rememberMe") {
      setValues({ ...values, [e.target.name]: !values.rememberMe });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
    if (values.rememberMe) {
      localStorage.setItem(e.target.name, e.target.value);
    }
  };

  const handleSubmit = () => {
    const tmpErrors = validation(values);
    setErrors(tmpErrors);
    if (Object.keys(tmpErrors).length === 0) {
      onSubmit(values);
    }
  };

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
  };
};
