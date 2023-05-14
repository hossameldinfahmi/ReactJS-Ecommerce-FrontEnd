import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice/login";
import { useDispatch } from "react-redux";

function ChangeAddressForm() {
  const dispatch = useDispatch();

  const initialValues = {
    password: "",
    confirmPassword: "",
    city: "",
    country: "",
    street: "",
    building_number: "",
  };
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    street: Yup.string().required("Required"),
    building_number: Yup.string().required("Required"),
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
          password: values.password,
          confirm_password: values.confirmPassword,
          addresses: [
            {
              city: values.city,
              country: values.country,
              street: values.street,
              building_number: values.building_number,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      toast.success("Address Changed Succsesuflly", {
        position: toast.POSITION.TOP_RIGHT,
      });
      handleLogout();

      navigate("/login");
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <h2 className="text-4xl font-extrabold my-6">Change Address</h2>

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

          <div className="mb-4">
            <label htmlFor="city">City</label>
            <Field
              type="text"
              id="city"
              name="city"
              className="block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country">Country</label>
            <Field
              type="text"
              id="country"
              name="country"
              className="block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="country"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="street">Street</label>
            <Field
              type="text"
              id="street"
              name="street"
              className="block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="street"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="building_number">Building Number</label>
            <Field
              type="text"
              id="building_number"
              name="building_number"
              className="block w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="building_number"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-full"
            disabled={formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ChangeAddressForm;
