import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegistrationForm.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import "./RegistrationForm.css";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirm_password: "",
  phone: "",
  date_of_birth: "",
  image: null,
};

const RegistrationForm = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.username.trim()) {
      errors.username = "Required";
    } else if (
      values.username.trim().length < 3 ||
      values.username.trim().length > 15
    ) {
      errors.username = "Username must be between 3 and 15 characters long";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!values.image) {
      errors.image = "Required";
    } else if (values.image.size > 1000000) {
      errors.image = "Image size cannot exceed 1MB";
    }

    if (values.image && values.image.size > 1000000) {
      errors.image = "File size must be less than 1MB";
    }

    if (!/^[0][0-9]{10}$/.test(values.phone)) {
      errors.phone = "Phone number must start with 0 and have 11 digits";
    }
    if (values.confirm_password !== values.password) {
      errors.confirm_password = "Passwords do not match";
    }

    return errors;
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      let formData = new FormData();
      formData.append("username", values.username);
      formData.append("password", values.password);
      formData.append("confirm_password", values.confirm_password);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("date_of_birth", values.date_of_birth);
      formData.append("image", values.image);

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/auth/register/`,
        formData
      );

      if (response.status === 201) {
        resetForm();
        toast.success("Form submitted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/login");
      } else {
        toast.error("Failed to submit the form, please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { data } = error.response;

        if (typeof data === "string") {
          toast.error(data, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (typeof data === "object") {
          const errorMessages = Object.values(data).flat();

          errorMessages.forEach((errorMessage) => {
            toast.error(errorMessage, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
        } else {
          toast.error("An error occurred while submitting the form.", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else {
        toast.error("An error occurred while submitting the form.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      validateOnChange={true}
    >
      {({ isSubmitting, setFieldValue, isValid }) => (
        <Form className="my-16 max-w-xl mx-auto bg-white p-8 border-t-4 border-green-500 rounded-lg shadow-lg">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-3xl dark:text-dark my-8">
            Registration
          </h1>

          <div className="flex flex-row mb-4">
            <div className="w-1/2 mr-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full border border-gray-400 p-2 rounded-lg"
                onBlur={(e) => {
                  e.target.value = e.target.value.trim();
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <Field
                type="text"
                name="username"
                className="w-full border border-gray-400 p-2 rounded-lg"
                onBlur={(e) => {
                  e.target.value = e.target.value.trim();
                }}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="w-full border border-gray-400 p-2 rounded-lg"
              onBlur={(e) => {
                e.target.value = e.target.value.trim();
              }}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirm_password"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <Field
              type="password"
              name="confirm_password"
              className="w-full border border-gray-400 p-2 rounded-lg"
              onBlur={(e) => {
                e.target.value = e.target.value.trim();
              }}
            />
            <ErrorMessage
              name="confirm_password"
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone
            </label>
            <Field
              type="text"
              name="phone"
              className="w-full border border-gray-400 p-2 rounded-lg"
              onBlur={(e) => {
                e.target.value = e.target.value.trim();
              }}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="date_of_birth"
              className="block text-gray-700 font-bold mb-2"
            >
              Date of Birth
            </label>
            <Field
              type="date"
              name="date_of_birth"
              className="w-full border border-gray-400 p-2 rounded-lg"
            />
            <ErrorMessage
              name="date_of_birth"
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Profile Image
            </label>
            <input
              type="file"
              name="x"
              onChange={(e) => {
                setFieldValue("image", e.currentTarget.files[0]);
              }}
            />

            <ErrorMessage
              name="image"
              component="div"
              className="text-red-500 text-sm mt-2"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isSubmitting || !isValid}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
