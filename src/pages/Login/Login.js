import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice/login";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .max(16, "Password must not exceed 16 characters")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_API_URL}/auth/login/`,
        values
      );

      if (!response.data.tokens) {
        toast.error("Invalid username or password", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      localStorage.setItem("token", response.data.tokens.access);
      toast.success("Login Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
      dispatch(login());
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col items-center justify-center py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Login</h1>
          </div>
          <div className="container mx-auto mt-8 px-4 mb-16">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
              <div className="py-4 px-6">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    className="text-red-500 text-xs italic"
                    name="email"
                    component="p"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>

                  <Field
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    className="text-red-500 text-xs italic"
                    name="password"
                    component="p"
                  />
                </div>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
