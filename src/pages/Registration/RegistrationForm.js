import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirm_password: "",
  phone: "",
  date_of_birth: "",
  addresses: "",
  profileImage: null,
};

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

  if (values.profileImage && values.profileImage.size > 1000000) {
    errors.profileImage = "File size must be less than 1MB";
  }

  if (!/^\d+$/.test(values.phone)) {
    errors.phone = "Phone number must contain only numbers";
  }

  //   if (!values.date_of_birth) {
  //     errors.date_of_birth = "Required";
  //   } else {
  //     const dob = new Date(values.date_of_birth);
  //     const now = new Date();
  //     const minDob = new Date("2010-01-01");
  //     if (dob < now) {
  //       errors.date_of_birth = "Date of birth cannot be in the future";
  //     } else if (dob < minDob) {
  //       errors.date_of_birth = "Date of birth must before after 2010";
  //     } else {
  //       errors.date_of_birth = "";
  //     }
  //   }

  if (values.confirm_password !== values.password) {
    errors.confirm_password = "Passwords do not match";
  }

  console.log(initialValues.profileImage);
  return errors;
};

const onSubmit = async (values, { setSubmitting }) => {
  try {
    // Send the form data to the backend API
    const response = await axios.post(
      "http://localhost:8000/auth/register/",
      values
    );

    // Handle the response from the backend API
    if (response.status === 201) {
      alert("Form submitted successfully!");
    } else {
      alert("Failed to submit the form, please try again later.");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while submitting the form.");
  }

  setSubmitting(false);
};

const RegistrationForm = () => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}
    validateOnChange={true}
  >
    {({ isSubmitting, setFieldValue }) => (
      <Form className="max-w-xl mx-auto bg-white p-8 border-t-4 border-green-500 rounded-lg shadow-lg">
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
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
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
            htmlFor="addresses"
            className="block text-gray-700 font-bold mb-2"
          >
            Addresses
          </label>
          <Field
            component="textarea"
            name="addresses"
            className="w-full border border-gray-400 p-2 rounded-lg"
            onBlur={(e) => {
              e.target.value = e.target.value.trim();
            }}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="profileImage"
            className="block text-gray-700 font-bold mb-2"
          >
            Profile Image
          </label>
          <input
            type="file"
            name="profileImage"
            onChange={(e) => {
              setFieldValue("profileImage", e.currentTarget.files[0]);
            }}
          />
          <ErrorMessage
            name="profileImage"
            component="div"
            className="text-red-500 text-sm mt-2"
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default RegistrationForm;
