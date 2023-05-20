import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ChangePasswordForm from "../../components/ChangePassword/ChangePassword";
import ChangeEmailForm from "../../components/ChangeEmail/ChangeEmail";
import ChangeAddressForm from "../../components/ChangeAddress/ChangeAddress";
import { fetchUserData } from "../../store/authSlice/login";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

function UserProfile() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    setIsLoading(true);
    const response = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_API_URL}/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsLoading(false);
        setUserData(response.data);
        console.log(`respone ${response.data}`);
      } catch (error) {
        console.error(error);
      }
    };
    response();
  }, []);

  console.log(`Tis is user Data ${JSON.stringify(userData)}`);
  return (
    <div className="p-16">
      <div className="p-8 bg-gray-100 rounded-full shadow-md mt-24 flex flex-col md:flex-row items-center">
        {isLoading && (
          <div
            style={{
              position: "absolute",
              zIndex: 9999,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <ClipLoader
              css={{
                margin: "0 auto",
                border: "10px solid #f8c547",
                borderTopColor: "#28a745",
              }}
              loading={isLoading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        <div className="relative">
          <div className="w-48 overflow-hidden h-48 bg-indigo-100 mx-16 rounded-full shadow-2xl flex items-center justify-between text-indigo-500 ">
            <img
              src={
                userData && userData.image
                  ? `https://res.cloudinary.com/das9oh9bs/${userData?.image}`
                  : "https://pixsector.com/cache/50fcb576/av0cc3f7b41cb8510e35c.png"
              }
              alt=""
              className="object-coverw-full h-full"
            />
          </div>
        </div>
        <div className="md:ml-8 mt-8 md:mt-0 text-center md:text-left border-b ">
          <h1 className="text-4xl font-medium text-gray-700">
            Name : {userData?.username}
          </h1>
          <p className="font-light text-gray-600 mt-3">
            Date Of Birth : {userData?.date_of_birth}
          </p>
          <p className="mt-8 text-gray-500">Email: {userData?.email}</p>
          <p className="mt-2 text-gray-500">Phone: {userData?.phone}</p>
          {userData && userData.addresses && (
            <p className="mt-2 text-gray-500">
              Address: {userData.addresses[0]?.country || " "} ,{" "}
              {userData.addresses[0]?.city || ""} ,{" "}
              {userData.addresses[0]?.street || ""} ,{" "}
              {userData.addresses[0]?.building_number || ""}
            </p>
          )}
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-center">
        <Tabs id="custom-animation" value="html">
          <TabsHeader>
            <Tab
              className="bg-gray-900 text-white py-2 mx-2 px-4 rounded-l-md rounded-full"
              selectedClassName="bg-green-600"
              value="Password"
            >
              Change Password
            </Tab>
            <Tab
              className="bg-gray-900 text-white mx-2 py-2 px-4 rounded-full"
              selectedClassName="bg-green-600"
              value="Email"
            >
              Change Email
            </Tab>
            <Tab
              className="bg-gray-900 text-white mx-2 py-2 px-4 rounded-r-md rounded-full"
              selectedClassName="bg-gray-700"
              value="Address"
            >
              Change Address
            </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value="Password">
              <ChangePasswordForm />
            </TabPanel>
            <TabPanel value="Email">
              <ChangeEmailForm />
            </TabPanel>
            <TabPanel value="Address">
              <ChangeAddressForm />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

export default UserProfile;
