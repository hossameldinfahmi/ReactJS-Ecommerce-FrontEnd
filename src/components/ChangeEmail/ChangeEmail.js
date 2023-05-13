import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice/login";
import { useDispatch } from "react-redux";

function ChangeEmailForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_API_URL}/auth/`,
        {
          email: values.email,
          password: values.password,
          confirm_password: values.confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Email Changed Succsesuflly", {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleLogout();

      navigate("/login");
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setSubmitting(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      className="container"
    >
      {(formik) => (
        <Form>
          <h2 className="text-4xl font-extrabold my-6">Change Email</h2>

          <div className="mb-4">
            <label htmlFor="email">New Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-full"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ChangeEmailForm;
