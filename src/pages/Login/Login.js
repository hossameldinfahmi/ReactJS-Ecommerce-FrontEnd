import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice/login";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../store/authSlice/login";
import { useEffect } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const initialValues = {
    email: "",
    password: "",
  };

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
      toast.success("Login Succsefully", {
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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
