import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserProfile() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  return (
    <div className="p-16">
      <div className="p-8 bg-my-blue shadow mt-24 flex flex-col md:flex-row items-center">
        <div className="relative">
          <div className="w-48 overflow-hidden h-48 bg-indigo-100 mx-16 mb-14 rounded-full shadow-2xl flex items-center justify-between text-indigo-500 ">
            <img
              src={
                user && user.image
                  ? `https://res.cloudinary.com/das9oh9bs/${user?.image}`
                  : "https://pixsector.com/cache/50fcb576/av0cc3f7b41cb8510e35c.png"
              }
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:ml-8 mt-8 md:mt-0 text-center md:text-left border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            Name : {user?.username}
          </h1>
          <p className="font-light text-gray-600 mt-3">
            DOB : {user?.date_of_birth}
          </p>
          <p className="mt-8 text-gray-500">Email: {user?.email}</p>
          <p className="mt-2 text-gray-500">Phone: {user?.phone}</p>
          <p className="mt-2 text-gray-500">Address: {user?.address}</p>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-center">
        <p className="text-gray-600 text-center md:text-left font-light lg:px-16">
          An artist of considerable range, Ryan — the name taken by
          Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
          records all of his own music, giving it a warm, intimate feel with a
          solid groove structure. An artist of considerable range.
        </p>
        <button className="text-indigo-500 py-2 px-4 font-medium mt-4">
          Show more
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
